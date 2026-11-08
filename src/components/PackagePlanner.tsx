import { withBase } from '@/lib/urls';
import { useId, useState } from 'react';
import type { Package } from '@/domain/content';
import { formatPrice } from '@/domain/content';
import { crmSoftwareCosts } from '@/domain/services';
import { Button } from '@/components/ui/button';

export default function PackagePlanner({ packages }: { packages: Pick<Package, 'id' | 'name' | 'price' | 'setup' | 'cadence'>[] }) {
  const uid = useId();
  const [selected, setSelected] = useState('brand-blueprint');
  const [media, setMedia] = useState(3000);
  const pkg = packages.find((item) => item.id === selected);
  const isProject = pkg?.cadence === 'project';
  const hasAds = selected === 'demand-campaigns' || selected === 'combined';
  const retainers = packages.filter((item) => item.cadence === 'month');
  const recurring = selected === 'combined' ? retainers.reduce((sum, item) => sum + item.price, 0) : pkg?.price || 0;
  const setup = selected === 'combined' ? retainers.reduce((sum, item) => sum + item.setup, 0) : pkg?.setup || 0;
  const firstMonth = recurring + setup + (hasAds ? media : 0);
  return <div className="planner">
    <div className="planner-controls"><label htmlFor={`${uid}-service`}>What support are you considering?</label><select id={`${uid}-service`} value={selected} onChange={(event) => setSelected(event.target.value)}>
      {packages.map((item) => <option value={item.id} key={item.id}>{item.name}</option>)}
      <option value="combined">Content and Campaigns</option>
    </select>
    {hasAds && <div className="planner-media"><label htmlFor={`${uid}-media`}>Illustrative monthly media budget <strong>{formatPrice(media)}</strong></label><input id={`${uid}-media`} type="range" min="1000" max="10000" step="500" value={media} onChange={(event) => setMedia(Number(event.target.value))}/><p>Paid to the ad platform. This estimate is not a recommended budget.</p></div>}
    <p>All amounts in USD. Taxes and separately scoped production or technical work are additional.</p></div>
    <div className="planner-result" aria-live="polite" aria-atomic="true"><span className="eyebrow">{isProject ? 'Your project estimate' : 'Your first month estimate'}</span><div className="planner-total">{formatPrice(firstMonth)}</div><dl><div><dt>{isProject ? 'Project fee' : 'Monthly service fee'}</dt><dd>{formatPrice(recurring)}</dd></div>{setup > 0 && <div><dt>One-time setup</dt><dd>{formatPrice(setup)}</dd></div>}{hasAds && <div><dt>Illustrative media budget</dt><dd>{formatPrice(media)}</dd></div>}</dl>{!isProject && <p>Following months: <strong>{formatPrice(recurring + (hasAds ? media : 0))}</strong>{hasAds ? ' including this media budget.' : ' in service fees.'}</p>}
    {selected === 'crm-lead-setup' && <p>{crmSoftwareCosts}</p>}
    <Button asChild><a href={withBase(`/book-call/?service=${selected}`)} data-track="package_interest" data-service={selected}>Talk through this option <span aria-hidden="true">↗</span></a></Button></div>
  </div>;
}
