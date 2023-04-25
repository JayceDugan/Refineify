import { ArrowRightOnRectangleIcon, CursorArrowRippleIcon, ViewColumnsIcon } from "@heroicons/react/24/outline";

export const CeremonyActionBar = () => {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-3xl w-1/2 shadow-2xl border-2 border-slate-200 py-5">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center hover:-translate-y-1 transition-transform hover:cursor-pointer text-green-400 hover:text-green-500">
          <div className="text-center bg-green-300 green-800 rounded-full h-10 w-10 relative mx-auto text-white mb-3">
            <ViewColumnsIcon className="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="text-sm font-semibold">Vote to Split Ticket</p>
        </div>
        <div className="text-center hover:-translate-y-1 transition-transform hover:cursor-pointer">
          <div className="text-center bg-blue-300 rounded-full h-10 w-10 relative mx-auto text-white mb-3">
            <CursorArrowRippleIcon className="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="text-blue-700 text-sm font-semibold">Estimate</p>
        </div>
        <div className="text-center hover:-translate-y-1 transition-transform hover:cursor-pointer">
          <div className="text-center bg-slate-300 green-800 rounded-full h-10 w-10 relative mx-auto text-white mb-3">
            <ArrowRightOnRectangleIcon className="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="text-slate-500 text-sm font-semibold">Pass</p>
        </div>
      </div>
    </div>
  )
}
