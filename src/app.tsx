// @refresh reload
      import { Router } from "@solidjs/router";
      import { FileRoutes } from "@solidjs/start";
      import { Suspense } from "solid-js";
      import "virtual:uno.css";
      import "@unocss/reset/tailwind.css";
      const Home = (props: any) => {
        return (
          <div class="w-screen h-screen flex flex-col items-center">
            <div class="w-full h-full max-w-4xl">
              <Suspense>{props.children}</Suspense>
            </div>
          </div>
        );
      };
      export default function App() {
        return (
          <Router root={Home}>
            <FileRoutes />
          </Router>
        );
      }