import React, { useEffect, useState } from 'react';

type ClientOnlyBlockProps = {
  children: React.ReactNode;
};

export default function ClientOnlyBlock({
  children,
}: ClientOnlyBlockProps) {
  const [ready, setReady] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const runtimeFlag = false;

    setEnabled(runtimeFlag);
    setReady(true);
  }, []);

  if (!ready || !enabled) {
    return null;
  }
  // return the children
  return <>{children}</>
}
