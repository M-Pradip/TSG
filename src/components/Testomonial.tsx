"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, StarHalf } from "lucide-react";

export default function Testomonial() {
  return (
    <Carousel className="w-full max-w-full">
      <CarouselContent className="-ml-1">
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3 ">
          <div className="p-1">
            <Card className="w-[350px]">
              <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                <p className="text-2xl flex font-semibold">
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <StarHalf color="#e11d48" />
                </p>
                <p>
                  {" "}
                  "These days.. every one is more for a friendly customer
                  service, I would say that this shop has it. Plus, you still
                  can find what you need from American chips, candies, and
                  lollies also American drinks as well including big range of
                  cigarettes. I recommend it." - Legolas L
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="w-[350px]">
              <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                <p className="text-2xl flex font-semibold">
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <StarHalf color="#e11d48" />
                </p>
                <p>
                  "Thanks to TSG Hamil, our design process has become a breeze.
                  Quick, intuitive, and packed with features, it's the perfect
                  companion for turning concepts into captivating mockups. A
                  game-changer for any designer aiming for speed and
                  creativity." - Harry Potter
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="w-[350px]">
              <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                <p className="text-2xl flex font-semibold">
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <StarHalf color="#e11d48" />
                </p>
                <p>
                  "Quaint store, used to be a City Convenience store. Lovely
                  staff behind the counter who was more than happy to welcome
                  you to the store. It may be a small store but it's clean,
                  bright with lovely smell of fresh coffee, as they serve "make
                  yourself coffee" machine here. This is good old fashion
                  service with a smile. There's also an ATM machine here as
                  well, just on the outside wall. Cheers for great services!" -
                  Antoine M
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="w-[350px]">
              <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                <p className="text-2xl flex font-semibold">
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <StarHalf color="#e11d48" />
                </p>
                <p>
                  "Thanks to TSG Hamil, our design process has become a breeze.
                  Quick, intuitive, and packed with features, it's the perfect
                  companion for turning concepts into captivating mockups. A
                  game-changer for any designer aiming for speed and
                  creativity." - Harry Potter
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="w-[350px]">
              <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                <p className="text-2xl flex font-semibold">
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <Star color="#e11d48" />
                  <StarHalf color="#e11d48" />
                </p>
                <p>
                  "TSG Hamil has revolutionized our design workflow! With its
                  user-friendly interface and powerful features, creating
                  visually appealing prototypes has never been easier. It's a
                  must-have for any designer looking to boost efficiency and
                  bring ideas to life seamlessly." - John Doe
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
