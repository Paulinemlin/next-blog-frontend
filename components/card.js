import React from "react";
import Link from "next/link";
import NextImage from "./image";

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[id]">
      <div
        key={article.title}
        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
      >
        <div className="flex-shrink-0">
          <NextImage
            className="h-48 w-full object-cover"
            image={article.image}
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href={article.category.href} className="hover:underline">
                {article.category.name}
              </a>
            </p>
            <a href={article.href} className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {article.title}
              </p>
              <p className="mt-3 text-base text-gray-500">
                {article.description}
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href={article.author.href}>
                <span className="sr-only">{article.author.name}</span>
                <img
                  className="h-10 w-10 rounded-full"
                  src={article.author.imageUrl}
                  alt=""
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href={article.author.href} className="hover:underline">
                  {article.author.name}
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={article.datetime}>{article.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{article.readingTime} read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
