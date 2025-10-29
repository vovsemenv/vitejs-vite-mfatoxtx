import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import data from "./data.json";
import { FieldDemo } from "@/components/field-demo";
import { EmptyAvatarGroup } from "@/components/empty-avatar-group";
import { SpinnerBadge } from "@/components/spinner-badge";
import { ButtonGroupInputGroup } from "@/components/button-group-input-group";
import { FieldSlider } from "@/components/field-slider";
import { InputGroupDemo } from "@/components/input-group-demo";
import { InputGroupButtonExample } from "@/components/input-group-button";
import { ItemDemo } from "@/components/item-demo";
import { FieldSeparator } from "@/components/ui/field";
import { AppearanceSettings } from "@/components/appearance-settings";
import { NotionPromptForm } from "@/components/notion-prompt-form";
import { ButtonGroupDemo } from "@/components/button-group-demo";
import { FieldCheckbox } from "@/components/field-checkbox";
import { ButtonGroupNested } from "@/components/button-group-nested";
import { ButtonGroupPopover } from "@/components/button-group-popover";
import { FieldHear } from "@/components/field-hear";
import { SpinnerEmpty } from "@/components/spinner-empty";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

export default function App() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
              <Separator />
              <div className="grid justify-center gap-4">
                <FieldDemo />
                <Card className="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full p-5">
                  <EmptyAvatarGroup />
                  <SpinnerBadge />
                  <ButtonGroupInputGroup />
                  <FieldSlider />
                  <InputGroupDemo />
                </Card>
                <Card className="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full p-5">
                  <InputGroupButtonExample />
                  <ItemDemo />
                  <FieldSeparator className="my-4">
                    Appearance Settings
                  </FieldSeparator>
                  <AppearanceSettings />
                </Card>
                <Card className="order-first flex flex-col gap-6 lg:hidden xl:order-last xl:flex *:[div]:w-full *:[div]:max-w-full p-5">
                  <NotionPromptForm />
                  <ButtonGroupDemo />
                  <FieldCheckbox />
                  <div className="flex justify-between gap-4">
                    <ButtonGroupNested />
                    <ButtonGroupPopover />
                  </div>
                  <FieldHear />
                  <SpinnerEmpty />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
