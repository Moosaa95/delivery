import Image from "next/image"
import { MapPin } from "lucide-react"

interface PackageVisualizationProps {
  packageImage?: string
  animationGif?: string
  packageLabel?: string
}

export default function PackageVisualization({
  packageImage = "/images/package-image.jpg",
  animationGif = "/global-gif-unscreen.gif",
  packageLabel = "Package Visualization",
}: PackageVisualizationProps) {
  return (
    <div className="relative  overflow-hidden">
      {/* <div className="absolute top-4 left-4 z-10 bg-primary/90 text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center">
        <MapPin className="w-4 h-4 mr-1.5" />
        Global Tracking
      </div> */}

      <div className="flex flex-col md:flex-row space-x-4">
        {/* Package Image Section */}
        <div className="relative md:w-1/2 bg-white">
            <div className="aspect-[3/4]  h-[500px] md:h-[800px] w-full relative">
                {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/30 z-0" />     */}

                <div className="relative h-full w-full flex items-center justify-center bg-transparent p-6 z-10">
                    <div className="relative w-full h-full ">
                        <Image
                        src={packageImage || "/placeholder.svg"}
                        alt="Your package"
                        quality={100}
                        fill
                        className="object-contain"
                        style={{ mixBlendMode: "multiply" }}
                        priority
                        />
                    </div>
                </div>

                <div className="absolute bottom-2 left-0 right-0 p-4 z-20">
                <p className="text-white text-center font-medium">{packageLabel}</p>
                </div>
            </div>
          </div>


        {/* Global Tracking Animation */}
        <div className="relative md:w-1/2 bg-white">
          {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-indigo-900/5 z-0" /> */}
          <div className="aspect-[3/4]  h-[500px] md:h-[800px] w-full relative">
            <div className="relative h-full w-full flex items-center justify-center bg-transparent p-6 z-10">
              <Image
                src={animationGif || "/placeholder.svg"}
                alt="Global tracking visualization"
                width={400}
                height={400}
                className="object-contain max-h-full"
                style={{
                  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                }}
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Optional decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl z-0"></div>
    </div>
  )
}
