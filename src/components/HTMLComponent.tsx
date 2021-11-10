import { useRef, useLayoutEffect, createRef } from "react";

export function HTMLComponent(props: { htmlString: string }) {
  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!divRef.current) {
      return;
    }

    const fragment = document
      .createRange()
      .createContextualFragment(props.htmlString);

    divRef.current.appendChild(fragment);
  }, [props.htmlString]);

  return <div ref={divRef} />;
}
