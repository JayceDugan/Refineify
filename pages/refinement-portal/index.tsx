import { Fragment } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  ChevronRightIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/20/solid'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectActive, selectName, setActive } from "@/data-access/redux/store/slices";
import RefinementPortalLayout from '@/layouts/RefinementPortalLayout';

const projects = [
  {
    id: 'ed3c27ef-c688-4927-a217-5123ced854f6',
    title: 'Asset Finance',
    initials: 'GA',
    team: 'Engineering',
    members: [
      {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 12,
    lastUpdated: 'March 17, 2020',
    pinned: true,
    bgColorClass: 'bg-indigo-600',
  },
  // More projects...
]
const inProgressCeremonies = projects.filter((project) => project.pinned)

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function RefinementPortal() {
  const isActive = useSelector(selectActive);
  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-medium text-gray-900">In Progress Ceremonies</h2>
        <ul role="list" className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {inProgressCeremonies.map((project) => (
            <Link href={`/refinement-portal/ceremony/${project.id}`} tag="li" key={project.id} className="relative col-span-1 flex rounded-md shadow-sm">
              <div
                className={classNames(
                  project.bgColorClass,
                  'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                )}
              >
                {project.initials}
              </div>
              <div
                className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                  <p className="font-medium text-gray-900 hover:text-gray-600">
                    {project.title}
                  </p>
                  <p className="text-gray-500">{project.totalMembers} members, started 12 minutes ago</p>
                </div>
                <Menu as="div" className="flex-shrink-0 pr-2">
                  <Menu.Button
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true"/>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      className="absolute right-10 top-3 z-10 mx-3 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({active}) => (
                            <a
                              href="@/pages/refinement-ceremonies/dashboard#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              View
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({active}) => (
                            <a
                              href="@/pages/refinement-ceremonies/dashboard#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Removed from pinned
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({active}) => (
                            <a
                              href="@/pages/refinement-ceremonies/dashboard#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Share
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </Link>
          ))}
        </ul>
      </div>

      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-sm font-medium text-gray-900">Previous Ceremonies</h2>
        </div>
        <ul role="list" className="mt-3 divide-y divide-gray-100 border-t border-gray-200">
          {projects.map((project) => (
            <li key={project.id}>
              <a href="@/pages/refinement-ceremonies/dashboard#"
                 className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                      <span className="flex items-center space-x-3 truncate">
                        <span
                          className={classNames(project.bgColorClass, 'h-2.5 w-2.5 flex-shrink-0 rounded-full')}
                          aria-hidden="true"
                        />
                        <span className="truncate text-sm font-medium leading-6">
                          {project.title} <span className="truncate font-normal text-gray-500">in {project.team}</span>
                        </span>
                      </span>
                <ChevronRightIcon
                  className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects table (small breakpoint and up) */}
      <div className="mt-8 hidden sm:block">
        <div className="inline-block min-w-full border-b border-gray-200 align-middle">
          <table className="min-w-full">
            <thead>
            <tr className="border-t border-gray-200">
              <th
                className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                scope="col"
              >
                <span className="lg:pl-2">Previous Ceremonies</span>
              </th>
              <th
                className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                scope="col"
              >
                Members
              </th>
              <th
                className="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
                scope="col"
              >
                Last updated
              </th>
              <th
                className="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                scope="col"
              />
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                  <div className="flex items-center space-x-3 lg:pl-2">
                    <div
                      className={classNames(project.bgColorClass, 'h-2.5 w-2.5 flex-shrink-0 rounded-full')}
                      aria-hidden="true"
                    />
                    <a href="@/pages/refinement-ceremonies/dashboard#" className="truncate hover:text-gray-600">
                              <span>
                                {project.title} <span className="font-normal text-gray-500">in {project.team}</span>
                              </span>
                    </a>
                  </div>
                </td>
                <td className="px-6 py-3 text-sm font-medium text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-shrink-0 -space-x-1">
                      {project.members.map((member) => (
                        <img
                          key={member.handle}
                          className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                          src={member.imageUrl}
                          alt={member.name}
                        />
                      ))}
                    </div>
                    {project.totalMembers > project.members.length ? (
                      <span className="flex-shrink-0 text-xs font-medium leading-5">
                          +{project.totalMembers - project.members.length}
                        </span>
                    ) : null}
                  </div>
                </td>
                <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                  {project.lastUpdated}
                </td>
                <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

RefinementPortal.getLayout = RefinementPortalLayout;
