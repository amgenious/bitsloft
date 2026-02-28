import { useState, useEffect } from "react";
import {
  Code,
  Wrench,
  Users,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Loader2,
} from "lucide-react";
import CompanieslogoComponent from "./components/companieslogo";
import emailjs from "@emailjs/browser";
 import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from "react-toastify/unstyled";
import ClientsProductsPage from "./components/products";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type:"",
    message: "",
  });

    const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const sendEmail = (e:any) => {
    setSending(true)
    e.preventDefault();
    // EmailJS configuration
    const serviceID = import.meta.env.VITE_SERVICEID;
    const templateID = import.meta.env.VITE_TEMPLATEID;
    const userID = import.meta.env.VITE_USERID;

    if(formData.name == ""){
      toast('Sender Full Name cannot be empty!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
       setSending(false)   
      return
    }
if(formData.email == ""){
  toast('Sender Email Cannot be empty!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    setSending(false)  
  return
}
if(formData.type == ""){
  toast('Sender Service type cannot be null!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setSending(false)
  return
}
if(formData.email == ""){
  toast('Sender Message cannot be null!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setSending(false)
  return
}

    emailjs
      .send(serviceID, templateID, formData,userID)
      .then((response:any) => {
        toast('Message sent successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
        console.log("Success:", response.status);
      })
      .catch((error:any) => {
                toast('Failed to send message. Please try again later.!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
        });
        console.error("Error:", error);
      });
      setSending(false)
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-slate-900">
                  <span className="text-blue-600">bitsloft</span>
                </h1>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <div className="min-h-screen w-full bg-white relative overflow-hidden">
        {/* Purple Corner Grid Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
       linear-gradient(to right, #f0f0f0 1px, transparent 1px),
       linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
       radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),
       radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent)
     `,
            backgroundSize: "20px 20px, 20px 20px, 100% 100%, 100% 100%",
          }}
        />
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-40">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Transform Your Ideas Into
                <span className="text-blue-600 block">Digital Solutions</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                We specialize in software development, custom tools, and tech
                consultancy to help individuals and companies thrive in the
                digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection("services")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                >
                  Explore Services
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="text-center pb-16">
            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-500 hover:text-blue-600 animate-bounce"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We offer comprehensive technology solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Software Development */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Code className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Software Development
              </h3>
              <p className="text-slate-600 mb-6">
                Custom software solutions built with modern technologies. From
                web applications to mobile apps, we create scalable and robust
                solutions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Web Applications
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Mobile Development
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  API Development
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Database Design
                </li>
              </ul>
            </div>

            {/* Software Tools */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wrench className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Custom Software Tools
              </h3>
              <p className="text-slate-600 mb-6">
                Specialized tools and utilities designed to streamline your
                workflow and boost productivity for individuals and teams.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Automation Tools
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Productivity Software
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Integration Solutions
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Custom Utilities
                </li>
              </ul>
            </div>

            {/* Tech Consultancy */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Tech Consultancy
              </h3>
              <p className="text-slate-600 mb-6">
                Strategic technology guidance to help you make informed
                decisions and optimize your tech stack for maximum efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Technology Strategy
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  System Architecture
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Digital Transformation
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Technical Audits
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose bitsloft?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We combine technical expertise with business acumen to deliver
                solutions that not only work but drive real results for your
                organization.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <CheckCircle className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Expert Team
                    </h4>
                    <p className="text-slate-600">
                      Experienced developers and consultants with proven track
                      records
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <CheckCircle className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Modern Technologies
                    </h4>
                    <p className="text-slate-600">
                      We use cutting-edge tools and frameworks to build
                      future-proof solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <CheckCircle className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Client-Focused
                    </h4>
                    <p className="text-slate-600">
                      Your success is our priority. We work closely with you
                      every step of the way
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-blue-100 mb-8">
                Let's discuss how we can help you leverage technology to achieve
                your goals.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <CompanieslogoComponent />
      <ClientsProductsPage />
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-slate-600 mb-8">
                Whether you have a specific project in mind or just want to
                explore possibilities, we're here to help you succeed.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600">bitsloft@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <p className="text-slate-600">+233 200039099</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Location</h4>
                    <p className="text-slate-600">
                      Remote & On-site Services Available (Ghana)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.type}
                    onChange={handleChange}
                    name="type"
                  >
                    <option value={"software_development"}>Software Development</option>
                    <option value={"custom_software_tools"}>Custom Software Tools</option>
                    <option value={"tech_consultancy"}>Tech Consultancy</option>
                    <option value={"others"}>other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  onClick={sendEmail}
                  disabled={sending}
                >
                  {
                    sending ? <Loader2 className="animate-spin"/> : "Send Message"
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-blue-400">bitsloft</span>
              </h3>
              <p className="text-slate-300 mb-6 max-w-md">
                Transforming ideas into digital solutions through expert
                software development, custom tools, and strategic technology
                consulting.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tech Consultancy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support & Maintenance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} bitsloft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
