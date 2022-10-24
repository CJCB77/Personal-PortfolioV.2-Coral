import React from 'react'
import {useEffect} from 'react'

export const useInterventionObserver = (elementRef:React.RefObject<HTMLElement>, {
  threshold = 0.5,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = false
}) => {
  
  const [entry, setEntry] = React.useState<IntersectionObserverEntry>();
  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;
    
    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  },[elementRef, threshold, root, rootMargin, frozen]);

  return entry;
}
