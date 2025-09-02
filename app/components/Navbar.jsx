"use client";

const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },

    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow p-4 z-50">
            <ul className="flex gap-6 justify-center">
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <a href={`#${item.id}`} className="hover:text-blue-600">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
