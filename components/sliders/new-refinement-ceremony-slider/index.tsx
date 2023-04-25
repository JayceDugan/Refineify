import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import CeremonyConfigurationCheckboxes
  from "@/components/sliders/new-refinement-ceremony-slider/CeremonyConfigurationCheckboxes";
import CeremonyName from "@/components/sliders/new-refinement-ceremony-slider/CeremonyName";
import CeremonyParticipants from "@/components/sliders/new-refinement-ceremony-slider/CeremonyParticipants";
import CeremonyHeader from "@/components/sliders/new-refinement-ceremony-slider/CeremonyHeader";
import CeremonyTicketsList from "@/components/sliders/new-refinement-ceremony-slider/CeremonyTicketsList";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectActive, setActive } from "@/data-access/redux/store/slices";

export default function NewRefinementCeremonySlider() {
  const isActive = useSelector(selectActive)
  const dispatch = useDispatch()
  const onClose = () => dispatch(setActive(false))
  const router = useRouter();

  const startCeremony = () => {
    dispatch(setActive(false))

    setTimeout(() => {
      router.push('/refinement-portal/ceremony/id')
    }, 600)
  }

  return (
    <Transition.Root show={isActive} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                    <div className="h-0 flex-1 overflow-y-auto">
                      <CeremonyHeader />
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                          <div className="space-y-6 pt-6 pb-5">
                            <CeremonyName />
                            <CeremonyParticipants />
                            <CeremonyConfigurationCheckboxes />
                            <CeremonyTicketsList />
                            <fieldset>
                              <legend className="text-sm font-medium leading-6 text-gray-900">Privacy</legend>
                              <div className="mt-2 space-y-4">
                                <div className="relative flex items-start">
                                  <div className="absolute flex h-6 items-center">
                                    <input
                                      id="privacy-public"
                                      name="privacy"
                                      aria-describedby="privacy-public-description"
                                      type="radio"
                                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      defaultChecked
                                    />
                                  </div>
                                  <div className="pl-7">
                                    <label
                                      htmlFor="privacy-public"
                                      className="text-sm font-medium leading-6 text-gray-900"
                                    >
                                      Public access
                                    </label>
                                    <p id="privacy-public-description" className="text-sm text-gray-500">
                                      Everyone with the link will see this ceremony.
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <div className="relative flex items-start">
                                    <div className="absolute flex h-6 items-center">
                                      <input
                                        id="privacy-private-to-ceremony"
                                        name="privacy"
                                        aria-describedby="privacy-private-to-ceremony-description"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      />
                                    </div>
                                    <div className="pl-7">
                                      <label
                                        htmlFor="privacy-private-to-ceremony"
                                        className="text-sm font-medium leading-6 text-gray-900"
                                      >
                                        Private to ceremony members
                                      </label>
                                      <p id="privacy-private-to-ceremony-description" className="text-sm text-gray-500">
                                        Only members of this ceremony would be able to access.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="relative flex items-start">
                                    <div className="absolute flex h-6 items-center">
                                      <input
                                        id="privacy-private"
                                        name="privacy"
                                        aria-describedby="privacy-private-to-ceremony-description"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      />
                                    </div>
                                    <div className="pl-7">
                                      <label
                                        htmlFor="privacy-private"
                                        className="text-sm font-medium leading-6 text-gray-900"
                                      >
                                        Private to you
                                      </label>
                                      <p id="privacy-private-description" className="text-sm text-gray-500">
                                        You are the only one able to access this ceremony.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                          <div className="pt-4 pb-6">
                            <div className="flex text-sm">
                              <a
                                href="@/components/sliders/new-refinement-ceremony-slider/NewRefinementCeremonySlider#"
                                className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900"
                              >
                                <LinkIcon
                                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900"
                                  aria-hidden="true"
                                />
                                <span className="ml-2">Copy link</span>
                              </a>
                            </div>
                            <div className="mt-4 flex text-sm">
                              <a href="@/components/sliders/new-refinement-ceremony-slider/NewRefinementCeremonySlider#" className="group inline-flex items-center text-gray-500 hover:text-gray-900">
                                <QuestionMarkCircleIcon
                                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <span className="ml-2">Learn more about sharing</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4">
                      <button
                        type="button"
                        className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={startCeremony}
                      >
                        Start
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
