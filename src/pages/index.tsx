import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

type CriaTextoMarkdownProps = {
  link: string;
};

export default function CriaTextoMarkdown({
  link = "",
}: CriaTextoMarkdownProps) {
  const [makdown, setMakdown] = useState("");

  const linkTemporario = link
    ? link
    : "https://raw.githubusercontent.com/thuurzz/react-markdown-example/main/README.md";

  useEffect(() => {
    hangleGetTexMarkdown(linkTemporario);
  }, [makdown]);

  async function hangleGetTexMarkdown(link: string) {
    const markdownFromSite = (await axios.get(link)).data;
    criaTexto(markdownFromSite);
  }

  function criaTexto(texto: string) {
    setMakdown(texto);
  }

  return (
    <div className="">
      <ReactMarkdown>{makdown}</ReactMarkdown>
    </div>
  );
}
