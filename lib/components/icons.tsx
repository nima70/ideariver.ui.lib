export const Icons = {
  logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  hamburger: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      className={`${props.className} transition-transform duration-300 transform hover:scale-110 hover:text-secondary`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6h18M3 12h18m-18 6h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  close: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      className={`${props.className} transition-transform duration-300 transform hover:scale-110 hover:text-secondary`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  chevron: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 6l6 6-6 6" />
    </svg>
  ),
  info: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  ),
  services: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm3.5-6.5h-7v2h7v-2z" />
    </svg>
  ),
  whyChooseUs: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
    </svg>
  ),
  more: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-11h-2v6h2V7zm0 8h-2v2h2v-2z" />
    </svg>
  ),
  contact: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 8V7l-3 2-2-1-1-1h-1v-1h-1V4H9v1H8v1H7l-1 1-2 1-3-2v1L1 9v1l1 1v6l1 1v1h16v-1l1-1v-6l1-1V9l-1-1zM5 16H4v-2h1v2zm0-4H4v-1h1v1zm0-3H4v-1h1v1zm4 7H7v-1h2v1zm4 0h-2v-1h2v1zm4-1h-2v1h-2v-1h2v-1h2v1h-2zm0-4h-1v1h1v-1zm0-3h-1v1h1v-1zm0-2h-1v1h1v-1z" />
    </svg>
  ),
  defaultIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  ),
};
