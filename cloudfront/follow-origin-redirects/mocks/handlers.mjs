import { http, HttpResponse } from "msw";

export const handlers = [

  http.head("https://origin.example.com/query/files/image.jpeg", ({ request }) => {
    if (request.url !== 'https://origin.example.com/query/files/image.jpeg?foo=bar') {
      throw new Error("Incorrect query parameters");
    }

    return Response.redirect("https://files.example.com/file.JPG?credentials=query", 302);
  }),

  http.head("https://origin.example.com/cookie/files/image.jpeg", ({ request }) => {
    if (request.headers.get('Cookie') !== 'foo=bar hello=world') {
      throw new Error("Incorrect cookie header");
    }

    return Response.redirect("https://files.example.com/file.JPG?credentials=cookie", 302);
  }),

  http.head("https://origin.example.com/ok", ({ request }) => {
    return HttpResponse.text("ok");
  }),
  
];
