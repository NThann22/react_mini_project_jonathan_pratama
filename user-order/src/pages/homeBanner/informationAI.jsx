import React, { useState, useEffect } from "react";
import axios from "axios";

export default function InformationAI() {
  const [quote, setQuote] = useState("");
  const [generatingQuote, setGeneratingQuote] = useState(false);

  useEffect(() => {
    generateQuote();
  }, []);

  async function generateQuote() {
    setGeneratingQuote(true);
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        {
          contents: [
            {
              parts: [
                {
                  text: "berikan 1 keunikan makanan khas Indoenesia! jelaskan sedikit saja",
                },
              ],
            },
          ],
        }
      );

      const generatedQuote =
        response.data.candidates[0].content.parts[0].text;
      setQuote(generatedQuote);
    } catch (error) {
      console.log(error);
      setQuote("Maaf, terjadi kesalahan. Silakan coba lagi!");
    }
    setGeneratingQuote(false);
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-t from-[#ffcf6723] to-[#fdedca00]">
      <div className="w-full md:w-2/3 font-open_sans text-center">
        <h1 className='pb-[71px] font-bold text-[43px] text-[#F17228]'>Apa aja sih keunikan makanan khas Indonesia?</h1>
        <p className="font-semibold text-xl p-6">"{quote}"</p>
      </div>
    </div>
  );
}
