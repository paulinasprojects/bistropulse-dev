import { Card, CardContent } from "@/components/ui/card"
import { CardHeading } from "@/components/card-heading"
import { AddExtrasForm } from "./add-extras-form"

export const AddExtra = () => {
  return (
    <Card className="w-full min-h-screen">
      <CardContent className="pt-6">
        <CardHeading
          title="Add Extra Food"
        />
        <AddExtrasForm/>
      </CardContent>
    </Card>
  )
}
