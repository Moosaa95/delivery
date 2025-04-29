import ChatBubble from "./components/chat-bubble";
import Footer from "./components/footer";
import Header from "./components/header";

export default  function Layout ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            {/* <ChatBubble /> */}
            {children}
            <Footer />
        </div>
    );
}