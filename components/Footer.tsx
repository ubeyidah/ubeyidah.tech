export default function Footer() {
  return (
    <footer className="py-8 text-center mb-12">
      <p className="font-black hover:opacity-40 transition-all duration-400 text-cneter hover:text-shadow-md hover:text-shadow-foreground text-4xl md:text-6xl opacity-10 select-none uppercase mb-4">
        I USE ARCH BTW
      </p>
      <p className="text-muted-foreground">
        © {new Date().getFullYear()} {" "}
        <a
          href="https://github.com/ubeyidah"
          className="hover:underline transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ubeyidah
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
