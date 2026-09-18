
import React, {useState, type ReactNode} from 'react';
import TOC from '@theme-original/TOC';
import type TOCType from '@theme/TOC';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof TOCType>;

export default function TOCWrapper(props: Props): ReactNode {

  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);

  return (
    <>
      <TOC {...props} />
      <hr />
      <div>
        {feedback === null ? (
          <>
            <p>Was this page helpful?</p>
            <button onClick={() => setFeedback("yes")}>
               Yes
            </button>

            <button onClick={() => setFeedback("no")}>
               No
            </button>
          </>
        ) : feedback === "yes" ? (
          <p>Thank you for your feedback! </p>
        ) : (
          <p>Thank you for your feedback , We will improve!</p>
        )}
      </div>
    </>
  );
}
