export default function CeremonyConfigurationCheckboxes() {
  return (
    <fieldset>
      <legend className="text-sm font-medium leading-6 text-gray-900 mb-3">Ceremony Settings</legend>
      <div className="space-y-5">
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="comments" className="text-sm font-medium leading-6 text-gray-900">
              Creator Participation
            </label>
            <p id="comments-description" className="text-sm text-gray-500">
              As the ceremony creator, are you also participating?
            </p>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="candidates"
              aria-describedby="candidates-description"
              name="candidates"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="candidates" className="text-sm font-medium leading-6 text-gray-900">
              Voting After Reveal
            </label>
            <p id="candidates-description" className="text-sm text-gray-500">
              Would you like to allow votes to be changed after reveal?
            </p>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="offers" className="text-sm font-medium leading-6 text-gray-900">
              Voting Timers
            </label>
            <p id="offers-description" className="text-sm text-gray-500">
              Would you like voting timers to be applied?
            </p>
          </div>
        </div>
      </div>
    </fieldset>
  )
}
