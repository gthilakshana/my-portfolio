export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 md:px-16"
        >
            <div className="max-w-6xl mx-auto text-start">

                <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 uppercase tracking-tight">
                    Contact
                </h2>
                <p className="text-gray-400 mt-3 text-lg max-w-2xl">
                    Always open to questions, ideas, or a friendly hello — let’s connect.
                </p>
            </div>


            <form className="max-w-6xl mx-auto mt-12 bg-gray-800/80 backdrop-blur-md shadow-lg p-10 rounded-2xl space-y-8 border border-gray-700">
                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-5 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-5 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                        />
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-5 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full px-5 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                        />
                    </div>
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Choose a Topic
                    </label>
                    <select className="w-full px-5 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition">
                        <option>Select One...</option>
                        <option>Web Development</option>
                        <option>UI/UX Design</option>
                        <option>Other</option>
                    </select>
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                    </label>
                    <textarea
                        rows="5"
                        className="w-full px-5 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                        placeholder="Type your message..."
                    ></textarea>
                </div>


                <div className="text-center">
                    <button
                        type="submit"
                        className="px-10 py-3 rounded-lg font-semibold text-white bg-yellow-500 shadow-md hover:bg-yellow-600 hover:shadow-yellow-400/30 transition duration-300 transform hover:scale-105"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}
