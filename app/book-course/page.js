import React from "react";
import ResponsiveContainer from "../components/ResponsiveContainer";
import HeadingTer from "../components/HeadingTer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
export default function page() {
  return (
    <ResponsiveContainer>
      <div className="px-3.5">
        <HeadingTer>Book course</HeadingTer>

        <form className="grid grid-cols-1 gap-3.5">
          <Input className="bg-primary-light" type="text" placeholder="Name" />
          <Input
            className="bg-primary-light"
            type="email"
            placeholder="Email"
          />
          <Input type="text" placeholder="Email" />
          <Textarea placeholder="Type your message here." />
          <Select>
            <SelectTrigger className="w-[180px] active:border-accent-hover">
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent className="w-full">
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <button>send</button>
        </form>
      </div>
    </ResponsiveContainer>
  );
}
