
import Image from "next/image"
import HeroImageSquare from "@/public/hero-image_about.png"

export default function About() {
    return (
        <main>
            <section className="flex flex-col items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
                <div className="relative h-[300px] w-full">

                    <Image
                        src={HeroImageSquare}
                        alt="PrintForge Community - A group of makers collaborating on 3D printing projects"
                        width={742}
                        height={742}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />

                </div>


                <div className="flex-1 space-y-6">
                    <p className="hidden text-sm text-gray-600 uppercase md:block">
                        About printforge
                    </p>
                    <h2 className="text-3xl font-bold md:text-5xl">
                        Empowering makers worldwide
                    </h2>
                    <p className="text-lg text-gray-600">
                        Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.

                        Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.
                    </p>

                </div>

            </section>
            <hr className="border-gray-200" aria-hidden="true" />

            <section className="py-12" aria-labelledby="key-features">
                <div className="px-6 mx-auto max-w-7xl">
                    <h2 id="key-features" className="sr-only">
                        Key Features
                    </h2>
                    <div className="grid gap-6 md:gap-0 md:grid-cols-3">
                        <article className="p-6 bg-white">
                            <h3 className="mb-3 text-xl font-semibold font-montserrat-alternates">
                                100K+ Models
                            </h3>
                            <p className="text-gray-600">
                                Access our vast library of community-created 3D models, from practical tools to artistic creations.
                            </p>
                        </article>
                        <article className="p-6 bg-white border-gray-400 md:border-x">
                            <h3 className="mb-3 text-xl font-semibold font-montserrat-alternates">
                                Active Community
                            </h3>
                            <p className="text-gray-600">
                                Join thousands of makers who share tips, provide feedback, and collaborate on projects.
                            </p>
                        </article>
                        <article className="p-6 bg-white">
                            <h3 className="mb-3 text-xl font-semibold font-montserrat-alternates">
                                Free to Use
                            </h3>
                            <p className="text-gray-600">
                                Most models are free to download, with optional
                                premium features for power users.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <hr className="border-gray-200" aria-hidden="true" />

            <section className="container max-w-3xl px-4 py-8 mx-auto">
                <div className="prose max-w-none">
                    <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>
                    <p className="mb-4 text-gray-700">
                        At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and  manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge  and creativity that pushes the boundaries of what is possible with 3D printing.
                    </p>
                    <p className="text-gray-700">
                        Whether you re a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a PrintForge provides the tools and community to support your journey in 3D printing.
                    </p>
                </div>
            </section>

        </main>
    )
}
