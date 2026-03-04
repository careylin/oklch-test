import "./index.css";
import { Button } from "./components/Button/Button";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Inline } from "./components/Inline/Inline";
import { Stack } from "./components/Stack/Stack";
import { Heading } from "./components/Heading/Heading";
import { Text } from "./components/Text/Text";
import { Box } from "./components/Box/Box";

const menuItems = [
  { label: "View profile", value: "profile" },
  { label: "Settings", value: "settings" },
  { label: "Sign out", value: "signout" },
];

export function App() {
  return (
    <div className="app">
      <Heading level={600}>
        At Vercel, we've developed Geist, a{" "}
        <span className="pixel">typeface</span> specifically designed for
        developers and designers. We began by creating a monospace version that
        prioritized readability and seamlessly integrated into coding
        environments. After perfecting the monospace variant, we expanded Geist
        into a Sans and Pixel version, adding versatility to its capabilities.
      </Heading>
      <Heading level={500}>We connect people to the outdoors</Heading>
      <Box padding="lg" background="primary" radius="md">
      <Text className="pixel">
        Edit This is geist pixel thank you and save to test HMR
      </Text>
      </Box>
      <section>
        <Stack space="lg">
          <Heading level={300}>Cards</Heading>
          <Inline space="md" spread="fill">
            <Box padding="xl" background="secondary" radius="md">
              <Stack>
                <Heading level={200}>This is a title</Heading>
                <Text>
                  Edit This is geist pixel thank you and save to test HMR
                </Text>
                <Button variant="ghost" elevated>
                  Button
                </Button>
              </Stack>
            </Box>
            <Box padding="xl" background="secondary" radius="md">
              <Stack>
                <Heading level={200}>This is a title</Heading>
                <Text>
                  Edit This is geist pixel thank you and save to test HMR
                </Text>
                <Button variant="accent">Button</Button>
              </Stack>
            </Box>
            <Box padding="xl" background="secondary" radius="md">
              <Stack>
                <Heading level={200}>This is a title</Heading>
                <Text>
                  Edit This is geist pixel thank you and save to test HMR
                </Text>
                <Button variant="primary">Button</Button>
              </Stack>
            </Box>
          </Inline>
        </Stack>
      </section>
      <section>
        <Stack space="lg">
          <Heading level={300}>Buttons and Dropdowns</Heading>

          <Inline>
            <Button variant="accent">Accent</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="ghost">Ghost</Button>
          </Inline>
          <Inline>
            <Dropdown label="Accent" variant="default" items={menuItems} />
            <Dropdown label="Primary" variant="secondary" items={menuItems} />
            <Dropdown label="Secondary" variant="ghost" items={menuItems} />
          </Inline>
        </Stack>
      </section>

      <hr />
      <div className="Hstack">
        <div className="Vstack neutral">
          <div className="chip l50">50</div>
          <div className="chip l100">100</div>
          <div className="chip l200">200</div>
          <div className="chip l300">300</div>
          <div className="chip l400">400</div>
          <div className="chip l500">500</div>
          <div className="chip l600">600</div>
          <div className="chip l700">700</div>
          <div className="chip l800">800</div>
          <div className="chip l900">900</div>
        </div>
        <div className="Vstack green">
          <div className="chip l50">50</div>
          <div className="chip l100">100</div>
          <div className="chip l200">200</div>
          <div className="chip l300">300</div>
          <div className="chip l400">400</div>
          <div className="chip l500">500</div>
          <div className="chip l600">600</div>
          <div className="chip l700">700</div>
          <div className="chip l800">800</div>
          <div className="chip l900">900</div>
        </div>
        <div className="Vstack yellow">
          <div className="chip l50">50</div>
          <div className="chip l100">100</div>
          <div className="chip l200">200</div>
          <div className="chip l300">300</div>
          <div className="chip l400">400</div>
          <div className="chip l500">500</div>
          <div className="chip l600">600</div>
          <div className="chip l700">700</div>
          <div className="chip l800">800</div>
          <div className="chip l900">900</div>
        </div>
        <div className="Vstack red">
          <div className="chip l50">50</div>
          <div className="chip l100">100</div>
          <div className="chip l200">200</div>
          <div className="chip l300">300</div>
          <div className="chip l400">400</div>
          <div className="chip l500">500</div>
          <div className="chip l600">600</div>
          <div className="chip l700">700</div>
          <div className="chip l800">800</div>
          <div className="chip l900">900</div>
        </div>
        <div className="Vstack pink">
          <div className="chip l50">50</div>
          <div className="chip l100">100</div>
          <div className="chip l200">200</div>
          <div className="chip l300">300</div>
          <div className="chip l400">400</div>
          <div className="chip l500">500</div>
          <div className="chip l600">600</div>
          <div className="chip l700">700</div>
          <div className="chip l800">800</div>
          <div className="chip l900">900</div>
        </div>
        <div className="Vstack purple">
          <div className="chip l50">50</div>
          <div className="chip l100">100</div>
          <div className="chip l200">200</div>
          <div className="chip l300">300</div>
          <div className="chip l400">400</div>
          <div className="chip l500">500</div>
          <div className="chip l600">600</div>
          <div className="chip l700">700</div>
          <div className="chip l800">800</div>
          <div className="chip l900">900</div>
        </div>
        <div className="Vstack blue">
          <div className="chip l50">50</div>
          <div className="chip l100">100</div>
          <div className="chip l200">200</div>
          <div className="chip l300">300</div>
          <div className="chip l400">400</div>
          <div className="chip l500">500</div>
          <div className="chip l600">600</div>
          <div className="chip l700">700</div>
          <div className="chip l800">800</div>
          <div className="chip l900">900</div>
        </div>
        <div className="Vstack teal">
          <div className="chip l50">50</div>
          <div className="chip l100">100</div>
          <div className="chip l200">200</div>
          <div className="chip l300">300</div>
          <div className="chip l400">400</div>
          <div className="chip l500">500</div>
          <div className="chip l600">600</div>
          <div className="chip l700">700</div>
          <div className="chip l800">800</div>
          <div className="chip l900">900</div>
        </div>
        <div className="Vstack jade">
          <div className="chip l50">50</div>
          <div className="chip l100">100</div>
          <div className="chip l200">200</div>
          <div className="chip l300">300</div>
          <div className="chip l400">400</div>
          <div className="chip l500">500</div>
          <div className="chip l600">600</div>
          <div className="chip l700">700</div>
          <div className="chip l800">800</div>
          <div className="chip l900">900</div>
        </div>
      </div>
    </div>
  );
}

export default App;
