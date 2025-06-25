import PageHeader from "./components/PageHeader";
import ConnectWithUs from "./components/ConnectWithUs";
import ContactForm from "./components/ContactForm";

export default function Contact() {
    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <PageHeader />
                <ContactForm />
                <ConnectWithUs />
            </main>
        </div>
    )
}