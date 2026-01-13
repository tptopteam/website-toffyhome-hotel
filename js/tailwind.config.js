/**
 * Tailwind CSS Configuration
 */

tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary': '#2563eb',
                'primary-dark': '#1d4ed8',
                'accent': '#f59e0b',
                'accent-dark': '#d97706',
            },
            fontFamily: {
                'thai': ['Prompt', 'sans-serif']
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out',
                'bounce-slow': 'bounce 2s infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                }
            }
        }
    }
};
