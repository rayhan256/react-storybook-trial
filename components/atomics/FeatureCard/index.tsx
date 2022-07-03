interface FeatureCardProps {
  title: string
  subtitle: string
  image: string
}

export default function index(props: FeatureCardProps) {
  const { title, subtitle, image } = props
  return (
    <>
      <div className="card feature-card border-0">
        <img src={image} width={80} height={80} alt="" className="mb-30" />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">{subtitle}</p>
      </div>
    </>
  )
}
