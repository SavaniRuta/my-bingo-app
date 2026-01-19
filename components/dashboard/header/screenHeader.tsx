type ScreenHeaderProps = {
  title: string
  description?: string
  actions?: React.ReactNode
  meta?: React.ReactNode
}

export function ScreenHeader({
  title,
  description,
  actions,
  meta,
}: ScreenHeaderProps) {
  return (
    <div className="bg-card border-b border-border py-6 lg:py-7 shadow-xs">
      <div className="dashboard-container">

        {/* Breadcrubs */}
        {/* <div>
          <p>Breadcrubs</p>
        </div> */}

        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h1 className="font-recoleta text-3xl font-bold">
                {title}
              </h1>
              {meta && <div className="mt-2">{meta}</div>}
            </div>

            {description && (
              <p className="font-inter text-base font-normal text-muted-foreground">
                {description}
              </p>
            )}

          </div>

          {actions && <div>{actions}</div>}
        </div>
      </div>
    </div>
  );
}