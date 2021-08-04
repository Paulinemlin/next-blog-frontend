import { Fragment } from "react";
import Link from "next/link";
import { Disclosure, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation({ categories }) {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a href="">
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 800 800"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M400 800C620.914 800 800 620.914 800 400C800 179.086 620.914 0 400 0C179.086 0 0 179.086 0 400C0 620.914 179.086 800 400 800ZM308.947 383.249C314.024 382.091 318.304 380.425 321.785 378.253L311.558 349.359C307.931 351.822 303.724 353.053 298.937 353.053C295.166 353.053 292.119 351.894 289.798 349.577C287.622 347.115 286.534 343.784 286.534 339.583V300.48H313.516V269.631H286.534V239H245.19V269.631H228V300.48H245.19V340.018C245.19 354.935 249.325 366.16 257.593 373.691C265.862 381.222 277.685 384.987 293.062 384.987C298.72 384.987 304.015 384.408 308.947 383.249ZM461.759 383.032V265.286H420.415V321.987C420.415 331.401 418.312 338.425 414.105 343.059C410.043 347.549 404.748 349.794 398.22 349.794C391.837 349.794 386.978 347.766 383.641 343.711C380.305 339.656 378.636 333.211 378.636 324.376V265.286H337.293V331.111C337.293 349.07 341.79 362.539 350.784 371.518C359.923 380.498 372.108 384.987 387.34 384.987C394.158 384.987 400.614 383.756 406.707 381.294C412.799 378.832 418.022 375.211 422.374 370.432V383.032H461.759ZM569.772 378.253C566.29 380.425 562.011 382.091 556.933 383.249C552.001 384.408 546.706 384.987 541.049 384.987C525.672 384.987 513.849 381.222 505.58 373.691C497.311 366.16 493.177 354.935 493.177 340.018V300.48H475.986V269.631H493.177V239H534.521V269.631H561.503V300.48H534.521V339.583C534.521 343.784 535.609 347.115 537.785 349.577C540.106 351.894 543.152 353.053 546.924 353.053C551.711 353.053 555.918 351.822 559.545 349.359L569.772 378.253ZM491.053 560.262C485.976 559.103 481.696 557.438 478.215 555.265L488.442 526.372C492.069 528.834 496.276 530.065 501.063 530.065C504.834 530.065 507.881 528.907 510.202 526.589C512.378 524.127 513.466 520.796 513.466 516.596V477.492H486.484V446.644H513.466V416.013H554.81V446.644H572V477.492H554.81V517.031C554.81 531.948 550.675 543.172 542.407 550.703C534.138 558.234 522.315 562 506.938 562C501.28 562 495.985 561.421 491.053 560.262ZM338.241 442.299V560.045H377.626V547.445C381.978 552.224 387.201 555.845 393.293 558.307C399.386 560.769 405.842 562 412.66 562C427.892 562 440.077 557.51 449.216 548.531C458.21 539.552 462.707 526.083 462.707 508.124V442.299H421.364V501.389C421.364 510.224 419.695 516.669 416.359 520.724C413.022 524.779 408.163 526.807 401.78 526.807C395.252 526.807 389.957 524.562 385.895 520.072C381.688 515.438 379.585 508.413 379.585 499V442.299H338.241ZM243.067 560.262C237.989 559.103 233.71 557.438 230.228 555.265L240.455 526.372C244.082 528.834 248.289 530.065 253.076 530.065C256.848 530.065 259.894 528.907 262.215 526.589C264.391 524.127 265.479 520.796 265.479 516.596V477.492H238.497V446.644H265.479V416.013H306.823V446.644H324.014V477.492H306.823V517.031C306.823 531.948 302.689 543.172 294.42 550.703C286.151 558.234 274.328 562 258.951 562C253.294 562 247.999 561.421 243.067 560.262Z"
                          fill="#fff"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {categories.map((category) => (
                      <Link as={`/category/${category.slug}`} href="/category/[id]">
                        <a
                          key={category.name}
                          href={category.href}
                          className={classNames(
                            category.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={category.current ? "page" : undefined}
                        >
                          {category.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {categories.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
