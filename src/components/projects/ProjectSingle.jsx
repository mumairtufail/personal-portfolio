import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image }) => {
    const containerStyle = {
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#bcc8d1', // Lighter background color to match #0D2438
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
    };

    const imageStyle = {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
    };

    const cardStyle = {
        backgroundColor: '#F8FAFC', // Light background color for the card
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
    };

    const cardHoverStyle = {
        transform: 'scale(1.05)',
    };

    const textStyle = {
        color: '#fff', // Darker text color for better contrast
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.7,
                delay: 0.15,
            }}
        >
            <Link to="/projects/single-project" aria-label="Single Project">
                <div
                    className="rounded-xl shadow-lg cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
                    style={cardStyle}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = cardHoverStyle.transform;
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    <div style={containerStyle}>
                        <img
                            src={image}
                            style={imageStyle}
                            alt="Single Project"
                        />
                    </div>
                    <div className="text-center px-4 py-6" style={{ backgroundColor: '#1E3851', ...textStyle }}>
                        <p className="font-general-medium text-lg md:text-xl mb-2">
                            {title}
                        </p>
                        <span className="text-lg">
                            {category}
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectSingle;
