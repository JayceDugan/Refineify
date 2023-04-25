import TicketView from "@/components/TicketView";

export const TicketReviewView = () => (
  <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
    {/* Left column */}
    <div className="grid grid-cols-1 gap-4 lg:col-span-3">
      <section aria-labelledby="section-1-title">
        <div className="overflow-hidden rounded-lg bg-white shadow py-5 lg:py-10">
          <TicketView />
        </div>
      </section>
    </div>
  </div>
)
