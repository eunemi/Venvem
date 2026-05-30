import {
  CheckCircle2,
  Clock3,
  Code2,
  FileText,
  Truck,
  type LucideIcon,
} from 'lucide-react'

export type RequestStatus = 'review' | 'accepted' | 'building' | 'delivery'
export type DeliveryPlatform = 'web' | 'mobile' | 'desktop' | 'software'

export type ProjectRequest = {
  id: string
  title: string
  type: string
  submitted: string
  status: RequestStatus
  phase: string
  progress: number
  budget: string
  timeline: string
  summary: string
  nextStep: string
  platform: DeliveryPlatform
  deliveryStatus: string
  liveUrl?: string
  buildDownloadUrl?: string
  sourceZipUrl?: string
}

export type TimelineStep = {
  label: string
  icon: LucideIcon
}

export const trackingUser = {
  name: 'Arya Yadav',
  email: 'arya@venvem.demo',
}

const demoSourcePackage = (name: string) =>
  `data:text/plain;charset=utf-8,Demo source package for ${encodeURIComponent(name)}. Replace this placeholder with the real ZIP file when backend storage is connected.`

const demoBuildPackage = (name: string) =>
  `data:text/plain;charset=utf-8,Demo app build for ${encodeURIComponent(name)}. Replace this placeholder with the real mobile or desktop build when ready.`

export const trackingRequests: ProjectRequest[] = [
  {
    id: 'VRQ-482917',
    title: 'AI Customer Support Portal',
    type: 'AI Tool',
    submitted: 'May 28, 2026',
    status: 'accepted',
    phase: 'Build Started',
    progress: 68,
    budget: 'Balanced',
    timeline: '1 month',
    summary: 'Your project is accepted. We are now shaping the main dashboard, login flow, and AI response experience.',
    nextStep: 'First design preview and clickable user journey.',
    platform: 'web',
    deliveryStatus: 'Preview link ready',
    liveUrl: 'https://example.com/ai-support-portal',
    sourceZipUrl: demoSourcePackage('AI Customer Support Portal'),
  },
  {
    id: 'VRQ-219604',
    title: 'Premium Portfolio Website',
    type: 'Website',
    submitted: 'May 29, 2026',
    status: 'review',
    phase: 'Under Review',
    progress: 34,
    budget: 'Lean',
    timeline: '1-2 weeks',
    summary: 'Your request is being reviewed. Content, sections, launch timeline, and design direction are being checked.',
    nextStep: 'Scope confirmation and content checklist.',
    platform: 'web',
    deliveryStatus: 'Links unlock after approval',
  },
  {
    id: 'VRQ-730155',
    title: 'Operations Automation Dashboard',
    type: 'Automation',
    submitted: 'May 25, 2026',
    status: 'delivery',
    phase: 'Delivery Prep',
    progress: 86,
    budget: 'Premium',
    timeline: 'Flexible',
    summary: 'Core screens are ready. Final polishing is happening on exports, admin controls, and responsive behavior.',
    nextStep: 'Final QA notes and handoff summary.',
    platform: 'desktop',
    deliveryStatus: 'Build package ready',
    buildDownloadUrl: demoBuildPackage('Operations Automation Dashboard'),
    sourceZipUrl: demoSourcePackage('Operations Automation Dashboard'),
  },
]

export const trackingTimeline: TimelineStep[] = [
  { label: 'Submitted', icon: FileText },
  { label: 'Review', icon: Clock3 },
  { label: 'Accepted', icon: CheckCircle2 },
  { label: 'Build', icon: Code2 },
  { label: 'Delivery', icon: Truck },
]

export const phasePosition: Record<string, number> = {
  'Under Review': 1,
  'Build Started': 3,
  'Delivery Prep': 4,
}

export const statusLabel: Record<RequestStatus, string> = {
  review: 'Under Review',
  accepted: 'Accepted',
  building: 'Building',
  delivery: 'Delivery Prep',
}

export function getTrackingRequest(id: string) {
  return trackingRequests.find((request) => request.id.toLowerCase() === id.toLowerCase())
}
