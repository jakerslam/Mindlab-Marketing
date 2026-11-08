import { defineType, defineField } from 'sanity';

const required = <T extends { required(): T }>(rule: T) => rule.required();
const text = (name: string, title: string) => defineField({ name, title, type: 'string', validation: required });
const paragraph = (name: string, title: string) => defineField({ name, title, type: 'text', rows: 3, validation: required });
const strings = (name: string, title: string) => defineField({ name, title, type: 'array', of: [{ type: 'string' }], validation: (rule) => rule.required().min(1) });
const packageOptions = ['brand-blueprint', 'content-studio', 'demand-campaigns', 'crm-lead-setup'];

export const schemaTypes = [
  defineType({ name: 'siteSettings', title: 'Site settings', type: 'document', fields: [text('name', 'Business name'), paragraph('description', 'Site description')], preview: { select: { title: 'name' } } }),
  defineType({ name: 'homePage', title: 'Homepage introduction', type: 'document', fields: [text('eyebrow', 'Opening label'), text('title', 'Main headline'), paragraph('description', 'Introduction')], preview: { prepare: () => ({ title: 'Homepage introduction' }) } }),
  defineType({ name: 'servicePackage', title: 'Service packages', type: 'document', fields: [
    defineField({ name: 'id', title: 'Stable package ID', type: 'string', description: 'Used in public links. Preserve when editing or migrating.', options: { list: packageOptions }, validation: required }),
    text('number', 'Display order (01, 02, 03, 04)'), text('name', 'Package name'), text('tagline', 'Short promise'), paragraph('description', 'Description'),
    defineField({ name: 'price', title: 'Service price (USD)', type: 'number', validation: (rule) => rule.required().min(0) }),
    defineField({ name: 'currency', title: 'Currency', type: 'string', initialValue: 'USD', options: { list: ['USD'] }, validation: required }),
    defineField({ name: 'cadence', title: 'Billing cadence', type: 'string', options: { list: ['project', 'month'] }, validation: required }),
    defineField({ name: 'setup', title: 'One-time setup fee (USD)', type: 'number', validation: (rule) => rule.required().min(0) }),
    text('timeline', 'Working rhythm'), strings('deliverables', 'Included deliverables'), strings('exclusions', 'Separately scoped'), paragraph('idealFor', 'Who this fits'),
  ], preview: { select: { title: 'name', subtitle: 'tagline' } } }),
  defineType({ name: 'industry', title: 'Industries', type: 'document', fields: [
    text('id', 'Stable anchor ID'), text('name', 'Industry name'),
    defineField({ name: 'audience', title: 'Audience', type: 'string', options: { list: ['b2b', 'b2c'] }, validation: required }),
    text('examples', 'Business examples'), paragraph('challenge', 'Customer challenge'), paragraph('approach', 'Our approach'), text('action', 'Possible next step'),
    defineField({ name: 'order', title: 'Display order', type: 'number', validation: required }),
  ] }),
  defineType({ name: 'project', title: 'Sample work', type: 'document', fields: [
    text('id', 'Stable ID'), defineField({ name: 'slug', title: 'URL slug', type: 'string', validation: (rule) => rule.required().regex(/^[a-z0-9-]+$/) }),
    text('title', 'Project title'), defineField({ name: 'label', title: 'Evidence label', type: 'string', initialValue: 'Sample concept', options: { list: ['Sample concept'] }, validation: required, description: 'Only illustrative work is supported by this launch template. Extend the evidence model before adding verified client work.' }),
    text('audience', 'Audience'), text('service', 'Services demonstrated'), paragraph('summary', 'Summary'), text('headline', 'Concept headline'),
    defineField({ name: 'visual', title: 'Concept artwork', type: 'string', options: { list: ['northline', 'daybreak', 'alder'] }, validation: required }),
    paragraph('context', 'Context and fictional-business disclosure'),
    defineField({ name: 'decisions', title: 'Key decisions', type: 'array', of: [{ type: 'object', fields: [text('title', 'Heading'), paragraph('body', 'Explanation')] }], validation: (rule) => rule.required().min(1) }),
    paragraph('takeaway', 'What this demonstrates'), defineField({ name: 'order', title: 'Display order', type: 'number', validation: required }),
    defineField({ name: 'objective', title: 'Project objective', type: 'text', rows: 2 }),
    defineField({ name: 'artifacts', title: 'Demonstration deliverables', type: 'array', of: [{ type: 'object', fields: [
      text('id', 'Section ID'), text('title', 'Title'),
      defineField({ name: 'format', title: 'Presentation', type: 'string', options: { list: ['message-map', 'copy', 'plan'] }, validation: required }),
      paragraph('introduction', 'Introduction'),
      defineField({ name: 'items', title: 'Items', type: 'array', of: [{ type: 'object', fields: [text('label', 'Label'), text('title', 'Heading'), paragraph('body', 'Copy')] }], validation: (rule) => rule.required().min(1) }),
    ] }] }),
    defineField({ name: 'measurement', title: 'Proposed measurement (not results)', type: 'object', fields: [paragraph('approach', 'Context'), strings('metrics', 'What we would measure')] }),
    defineField({ name: 'relatedPackages', title: 'Related services', type: 'array', of: [{ type: 'string', options: { list: packageOptions } }] }),
  ] }),
  defineType({ name: 'guide', title: 'Practical guides', type: 'document', fields: [
    defineField({ name: 'slug', title: 'URL slug', type: 'string', validation: (rule) => rule.required().regex(/^[a-z0-9-]+$/) }),
    text('title', 'Title'), text('category', 'Topic'), paragraph('summary', 'Listing summary'), paragraph('introduction', 'Introduction'),
    defineField({ name: 'sections', title: 'Article sections', type: 'array', of: [{ type: 'object', fields: [
      text('heading', 'Section heading'), strings('paragraphs', 'Paragraphs'),
      defineField({ name: 'list', title: 'Optional checklist', type: 'array', of: [{ type: 'string' }] }),
    ] }], validation: (rule) => rule.required().min(1) }),
    defineField({ name: 'relatedPackage', title: 'Related service', type: 'string', options: { list: packageOptions }, validation: required }),
    defineField({ name: 'order', title: 'Display order', type: 'number', validation: required }),
  ], preview: { select: { title: 'title', subtitle: 'category' } } }),
  defineType({ name: 'faq', title: 'Frequently asked questions', type: 'document', fields: [text('question', 'Question'), paragraph('answer', 'Answer'), defineField({ name: 'order', title: 'Display order', type: 'number', validation: required })], preview: { select: { title: 'question' } } }),
];
