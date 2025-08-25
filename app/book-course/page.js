import React from "react";
import ResponsiveContainer from "../components/ResponsiveContainer";
import HeadingTer from "../components/HeadingTer";
import Input from "@/app/components/Input";

export default function page() {
  return (
    <ResponsiveContainer>
      <div className="px-3.5">
        <HeadingTer>Book course</HeadingTer>

        <form className="grid grid-cols-1 gap-3.5 mt-3.5 lg:grid-cols-2">
          <Input type="text" name="name" placeholder="Name" />
          <Input type="text" name="surname" placeholder="Surname" />
          <Input type="email" name="email" placeholder="E-mail" />
          <Input type="email" name="email" placeholder="Confirm E-mail" />

          <select className="p-2.5 bg-gray-300 shadow-md rounded-md focus:ring-2 active:ring-2 focus:ring-accent-green active:ring-accent-green lg:col-span-2">
            <option value="" disabled selected hidden>
              -- Select an course --
            </option>
            <option>ONE</option>
            <option>TWO</option>
            <option>THREE</option>
            <option>FOUR</option>
            <option>FIVE</option>
            <option>SIX</option>
          </select>
          <textarea
            className="h-40 focus:ring-2 active:ring-2 focus:ring-accent-green active:ring-accent-green p-5 bg-gray-300 rounded-md lg:col-span-2"
            placeholder="Start typing your text here..."
          ></textarea>

          <div className="lg:col-span-2">
            <Input type="checkbox" name="data-confirm" className="mr-2.5" />

            <label>
              I agree to be contacted via email. My email will only be used for
              this purpose and will not be stored in the database.
            </label>
          </div>

          <button className="bg-accent-green p-2.5 rounded-md text-lg text-white">
            Send
          </button>
        </form>
      </div>
    </ResponsiveContainer>
  );
}
