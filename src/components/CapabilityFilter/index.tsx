import React, { useMemo, useState } from 'react';
import styles from './styles.module.css';

type Capability = {
  id: string;
  title: string;
};

type CapabilityFilterProps = {
  capabilities: Capability[];
};

export default function CapabilityFilter({
  capabilities,
}: CapabilityFilterProps) {
  const [query, setQuery] = useState('');

  const filteredCapabilities = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return [...capabilities].sort((a, b) => {
      const aMatches = a.title.toLowerCase().includes(normalizedQuery);
      const bMatches = b.title.toLowerCase().includes(normalizedQuery);

      if (aMatches === bMatches) {
        return 0;
      }

      return aMatches ? -1 : 1;
    });
  }, [capabilities, query]);

  const normalizedQuery = query.trim().toLowerCase();

  const hasMatches = capabilities.some((capability) =>
    capability.title.toLowerCase().includes(normalizedQuery));

  const showNoResults = normalizedQuery !== '' && !hasMatches;

  return (
    <>
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search capabilities..."
        className={styles.search}
        aria-label="Search capabilities"
      />

      <div className={styles.grid}>
        {filteredCapabilities.map((capability) => {
          const isMatch = capability.title
            .toLowerCase()
            .includes(normalizedQuery);

          return (
            <div
              key={capability.id}
              className={`${styles.card} ${!isMatch ? styles.hidden : ''}`}>
              {capability.title}
            </div>
          );
        })}

        {showNoResults && (
          <div className={styles.noResults}>
            No capabilities found.
          </div>
        )}
      </div>
    </>
  );
}