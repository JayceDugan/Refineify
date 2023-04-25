import { CalendarIcon, ChevronRightIcon, LockClosedIcon, TrashIcon } from '@heroicons/react/20/solid'

const positions = [
  {
    id: 1,
    title: 'Back End Developer',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
    applicants: [
      {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  },
  {
    id: 2,
    title: 'Front End Developer',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
    applicants: [
      {
        name: 'Whitney Francis',
        email: 'whitney.francis@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Leonard Krasner',
        email: 'leonard.krasner@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Floyd Miles',
        email: 'floyd.miles@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  },
  {
    id: 3,
    title: 'User Interface Designer',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
    applicants: [
      {
        name: 'Emily Selman',
        email: 'emily.selman@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Kristin Watson',
        email: 'kristin.watson@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Emma Dorsey',
        email: 'emma.dorsey@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  },
]

export default function CeremonyTicketsList() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 justify-between items-center mb-3">
        <h3 className="text-sm font-medium leading-6 text-gray-900 ">Ceremony Tickets </h3>
        <button className="ml-auto text-xs text-blue-600 font-semibold">Add Tickets</button>
      </div>
      <div className="h-[150px] overflow-auto bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {positions.map((position) => (
            <li key={position.id}>
              <a href="#" className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="truncate">
                      <div className="flex text-xs">
                        <p className="truncate font-medium text-blue-700">FUNNEL-4463 - {position.title}</p>
                      </div>
                      <div className="mt-2 flex">
                        <div className="flex items-center text-xs text-gray-500 gap-2">
                          <p className="inline-flex rounded-full bg-green-100 px-2 text-xxs font-medium leading-5 text-green-800">
                            Epic
                          </p>
                          <p className="inline-flex rounded-full bg-blue-100 px-2 text-xxs font-medium leading-5 text-blue-800">
                            Sprint Name
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-5 flex-shrink-0">
                    <TrashIcon className="h-5 w-5 text-red-400 hover:text-red-300" aria-hidden="true" />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
