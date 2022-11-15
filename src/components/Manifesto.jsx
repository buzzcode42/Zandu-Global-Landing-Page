import { Slide } from './Slide'

export function Manifesto () {
  return (
    <section id="manifesto">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <h2 className="mb-4text-xl font-bold md:text-3xl text-black">
              Our Manifesto
            </h2>
          </div>
        </div>
      </div>
      <Slide />
    </section>
  )
}
