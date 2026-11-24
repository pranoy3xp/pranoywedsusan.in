import { useId } from 'react'

// Side-view white dove facing right, drawn in a 196x120 viewBox.
// The wing is drawn raised (top of the upstroke); CSS flips it through the
// shoulder pivot (112, 72) to animate the downstroke.

const fmt = ([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`

// Builds a tapered feather with a rounded tip from its base to its tip.
function featherPath(base, tip, width) {
  const [bx, by] = base
  const dx = tip[0] - bx
  const dy = tip[1] - by
  const len = Math.hypot(dx, dy)
  const nx = -dy / len
  const ny = dx / len
  const at = (t, offset) => [bx + dx * t + nx * offset, by + dy * t + ny * offset]

  return [
    `M${fmt(at(0, width * 0.3))}`,
    `Q${fmt(at(0.55, width))} ${fmt(at(0.9, width * 0.7))}`,
    `Q${fmt(tip)} ${fmt(at(0.9, -width * 0.55))}`,
    `Q${fmt(at(0.55, -width * 0.75))} ${fmt(at(0, -width * 0.3))}`,
    'Z',
  ].join(' ')
}

// Outermost primary first so inner feathers overlap it, as on a real wing.
const WING_FEATHERS = [
  [[118, 27], [64, 1], 5.5],
  [[116, 29], [58, 9], 6],
  [[114, 31], [53, 18], 6],
  [[112, 34], [50, 28], 6.5],
  [[110, 37], [49, 38], 6.5],
  [[108, 40], [51, 47], 7],
  [[106, 43], [55, 55], 7],
  [[105, 48], [60, 62], 7.5],
  [[104, 54], [65, 68], 7.5],
  [[103, 60], [71, 73], 7.5],
  [[103, 66], [79, 77], 7],
].map(([base, tip, w]) => featherPath(base, tip, w))

const TAIL_FEATHERS = [
  [[70, 85], [16, 78], 6],
  [[70, 87], [12, 84], 6.5],
  [[70, 89], [11, 90], 6.5],
  [[70, 91], [13, 96], 6.5],
  [[70, 93], [18, 101], 6],
].map(([base, tip, w]) => featherPath(base, tip, w))

const BODY =
  'M62 86 C78 75 96 71 112 70 C128 69 140 64 148 56 C152 50 158 46 165 46 C171 46 175 50 176 55 ' +
  'C177 59 175 62 171 65 C166 70 166 76 164 82 C160 94 146 102 128 104 C110 106 88 102 74 97 C69 95 65 92 62 86 Z'

const GREATER_COVERTS =
  'M112 74 C116 58 118 42 119 26 C113 24 107 29 103 35 Q97 40 100 45 Q94 49 98 54 Q92 58 97 62 ' +
  'Q92 67 98 70 Q102 76 112 74 Z'

const LESSER_COVERTS =
  'M113 72 C116 58 117 44 118 30 C114 32 110 37 108 43 Q104 48 108 52 Q104 57 108 61 Q105 66 109 69 Z'

function Wing({ className, featherFill, covertFill, lesserFill }) {
  return (
    <g className={`dove-wing ${className}`}>
      {WING_FEATHERS.map((d) => (
        <path key={d} className="dove-feather" fill={featherFill} d={d} />
      ))}
      <path className="dove-covert" fill={covertFill} d={GREATER_COVERTS} />
      <path className="dove-covert" fill={lesserFill} d={LESSER_COVERTS} />
    </g>
  )
}

export default function Dove({ className = '' }) {
  // useId output can contain characters that break url(#id) references.
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const id = (name) => `dove-${name}-${uid}`
  const url = (name) => `url(#${id(name)})`

  return (
    <svg className={`dove ${className}`} viewBox="0 -4 196 120" aria-hidden="true">
      <defs>
        <linearGradient id={id('body')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#fbf9fe" />
          <stop offset="1" stopColor="#ddd2ee" />
        </linearGradient>
        <linearGradient id={id('feather')} gradientUnits="userSpaceOnUse" x1="50" y1="10" x2="112" y2="60">
          <stop offset="0" stopColor="#e3d8f1" />
          <stop offset="0.55" stopColor="#f7f3fc" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id={id('far')} gradientUnits="userSpaceOnUse" x1="50" y1="10" x2="112" y2="60">
          <stop offset="0" stopColor="#d9cdea" />
          <stop offset="1" stopColor="#ece5f5" />
        </linearGradient>
        <linearGradient id={id('tail')} gradientUnits="userSpaceOnUse" x1="10" y1="0" x2="70" y2="0">
          <stop offset="0" stopColor="#e2d7f0" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <radialGradient id={id('covert')} cx="0.75" cy="0.7" r="0.9">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f0eaf8" />
        </radialGradient>
        <filter id={id('soft')} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <g className="dove-rig">
        <Wing className="dove-wing-far" featherFill={url('far')} covertFill="#ebe4f5" lesserFill="#efe9f7" />

        {TAIL_FEATHERS.map((d) => (
          <path key={d} className="dove-feather" fill={url('tail')} d={d} />
        ))}

        <path className="dove-body" fill={url('body')} d={BODY} />
        <ellipse cx="146" cy="74" rx="22" ry="12" fill="#fff" opacity="0.85" filter={url('soft')} />
        <path className="dove-feet" d="M112 103.5 q2 3 6 4 M119 103 q2 3 6 3.5" />

        <path className="dove-beak" d="M175 54 C179 54 184 56 187 58.5 C183 60 179 60.5 175 60 Z" />
        <ellipse className="dove-cere" cx="176.6" cy="55.2" rx="2.2" ry="1.2" />
        <circle className="dove-eye-ring" cx="167" cy="53" r="3.1" />
        <circle className="dove-eye" cx="167" cy="53" r="2.1" />
        <circle className="dove-eye-glint" cx="167.7" cy="52.3" r="0.7" />

        <Wing
          className="dove-wing-near"
          featherFill={url('feather')}
          covertFill={url('covert')}
          lesserFill="#fdfbff"
        />
      </g>
    </svg>
  )
}
