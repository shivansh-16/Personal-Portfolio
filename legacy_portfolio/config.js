/**
 * Configuration file for portfolio website
 * Update these values with your personal information and service credentials
 */

const CONFIG = {
    // Personal Information
    personal: {
        name: "Shivansh Pawar",
        title: "Web Developer",
        tagline: "Turning Ideas into Digital Reality",
        email: "shivanshpawa57@gmail.com",
        location: "Bhopal, MP ,India (Remote) ",
        
        // Social Links - Replace with your actual profiles
        social: {
            github: "https://github.com/shivansh-16",
            linkedin: "https://www.linkedin.com/in/shivansh-pawar/", 
            twitter: "https://twitter.com/yourusername",
            instagram: "https://instagram.com/yourusername"
        }
    },

    // EmailJS Configuration
    // Sign up at https://www.emailjs.com/ and replace these values
    emailjs: {
        publicKey: "-1GD7cl-qCDh1nMuX",
        serviceId: "service_sgvo2q7", 
        templateId: "template_8ao2wme",
        
        // Email template variables
        template: {
            to_name: "Shivansh Pawar",
            to_email: "shivanshpawar57@gmail.com"
        }
    },

    // Animation Settings
    animations: {
        typingSpeed: 120,
        deleteSpeed: 80,
        delayBetween: 2500,
        scrollOffset: 80
    },

    // Theme Colors (CSS Custom Properties)
    theme: {
        primaryColor: "#0EA5E9",
        primaryLight: "#38BDF8", 
        secondaryColor: "#06B6D4",
        accentColor: "#0284C7"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}