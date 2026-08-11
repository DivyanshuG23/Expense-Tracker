import { createPortal } from "react-dom";
import { AlertTriangle } from "lucide-react";

const DeleteConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm">

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-[28px] border border-[#332C1D] bg-[#121210] p-6 shadow-[0_25px_100px_rgba(0,0,0,.75)] sm:p-7"
      >

        {/* Content */}
        <div className="flex flex-col items-center text-center">

          {/* Warning Icon */}
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-rose-500/20 bg-rose-500/10 shadow-[0_10px_35px_rgba(244,63,94,.08)]">

            <AlertTriangle
              size={38}
              strokeWidth={2}
              className="text-rose-400"
            />

          </div>

          {/* Heading */}
          <h2 className="text-2xl font-black text-white sm:text-[28px]">
            Delete Transaction
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400 sm:text-[15px]">
            Are you sure you want to delete this transaction?
            <br />
            This action cannot be undone.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row-reverse">

            {/* Delete */}
            <button
              type="button"
              onClick={onConfirm}
              className="w-full rounded-2xl bg-rose-500 px-5 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(244,63,94,.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-400 hover:shadow-[0_12px_35px_rgba(244,63,94,.2)]"
            >
              Delete
            </button>

            {/* Cancel */}
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-2xl border border-[#332C1D] bg-[#171715] px-5 py-3.5 font-semibold text-slate-300 transition-all duration-300 hover:border-[#D6B56D]/40 hover:bg-[#D6B56D]/10 hover:text-[#E5C98A]"
            >
              Cancel
            </button>

          </div>

        </div>

      </div>

    </div>,

    document.body
  );
};

export default DeleteConfirmationModal;