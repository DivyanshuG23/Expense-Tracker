const BudgetCards = ({
  totalBudget,
  totalSpent,
  remainingBudget,
  onAdd,
}) => {
  const cards = [
    {
      title: "Total Budget",
      amount: `₹${totalBudget.toLocaleString()}`,
      color: "text-[#D6B56D]",
    },
    {
      title: "Spent",
      amount: `₹${totalSpent.toLocaleString()}`,
      color: "text-rose-400",
    },
    {
      title: "Remaining",
      amount: `₹${remainingBudget.toLocaleString()}`,
      color: "text-[#E5C98A]",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl border border-[#332C1D] bg-[#121210] p-5"
        >
          <p className="text-sm text-slate-500">
            {card.title}
          </p>

          <h2
            className={`mt-2 text-2xl font-bold ${card.color}`}
          >
            {card.amount}
          </h2>
        </div>
      ))}

      <button
        onClick={onAdd}
        className="rounded-3xl bg-[#D6B56D] p-5 font-semibold text-[#0B0B0A] transition hover:bg-[#E5C98A]"
      >
        + Add Budget
      </button>

    </div>
  );
};

export default BudgetCards;