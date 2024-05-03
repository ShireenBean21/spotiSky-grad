import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./page"), {
  ssr: false,
});

export default function Page() {
  return <DynamicComponent />;
}
