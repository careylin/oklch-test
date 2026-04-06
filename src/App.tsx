import "./index.css";
import { Button } from "./components/Button/Button";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Inline } from "./components/Inline/Inline";
import { Stack } from "./components/Stack/Stack";
import { Heading } from "./components/Heading/Heading";
import { Text } from "./components/Text/Text";
import { Box } from "./components/Box/Box";
import { CounterBadge } from "./components/CounterBadge/CounterBadge";
import { IconButton } from "./components/IconButton/IconButton";
import { Badge } from "./components/Badge/Badge";

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

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
          <Inline space="md" fit="fill">
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
          <Heading level={300}>Badges</Heading>
            <Inline align="left" width="350px">
            <Badge variant="neutral" emphasis="weak">dog-friendly</Badge>
            <Badge variant="neutral" emphasis="weak">kid-friendly</Badge>
            <Badge variant="neutral" emphasis="weak">waterfalls</Badge>
            <Badge variant="neutral" emphasis="weak">wildflowers</Badge>
            <Badge variant="neutral" emphasis="weak">lakes</Badge>
            <Badge variant="neutral" emphasis="weak" >rivers</Badge>
          </Inline>
          <Inline align="left">
            <Badge variant="neutral" emphasis="mid" href="https://www.alltrails.com">dog-friendly</Badge>
            <Badge variant="info" emphasis="mid" href="https://www.alltrails.com">kid-friendly</Badge>
            <Badge variant="caution" emphasis="mid" href="https://www.alltrails.com">waterfalls</Badge>
            <Badge variant="error" emphasis="mid" href="https://www.alltrails.com">waterfalls</Badge>
            <Badge variant="success" emphasis="mid" href="https://www.alltrails.com">waterfalls</Badge>
          </Inline>
          <Inline align="left">
            <Badge variant="neutral" emphasis="strong" href="https://www.alltrails.com">dog-friendly</Badge>
            <Badge variant="info" emphasis="strong" href="https://www.alltrails.com">kid-friendly</Badge>
            <Badge variant="caution" emphasis="strong" href="https://www.alltrails.com">waterfalls</Badge>
            <Badge variant="error" emphasis="strong" href="https://www.alltrails.com">waterfalls</Badge>
            <Badge variant="success" emphasis="strong" href="https://www.alltrails.com">waterfalls</Badge>
          </Inline>
          <Heading level={300}>Buttons and Dropdowns</Heading>
            <Inline align="spread" width="100%">
            <Button variant="accent">Accent</Button>
            <Button variant="primary"><CounterBadge count={3} variant="accent" />Primary</Button>
          </Inline>
          <Inline>
            <Button variant="accent">Accent</Button>
            <Button variant="primary"><CounterBadge count={3} variant="accent" />Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="ghost">Ghost</Button>
          </Inline>
          <Inline>
            <Dropdown label="accent" variant="accent" items={menuItems} />
            <Dropdown label="primary" variant="primary" items={menuItems} />
            <Dropdown label="secondary" variant="secondary" items={menuItems} />
            <Dropdown label="tertiary" variant="tertiary" items={menuItems} />
            <Dropdown label="ghost" variant="ghost" items={menuItems} />
          </Inline>
          <Inline>
            <IconButton icon={<StarIcon />} variant="accent" />
            <IconButton icon={<StarIcon />} variant="primary" />
            <IconButton icon={<StarIcon />} variant="secondary" />
            <IconButton icon={<StarIcon />} variant="tertiary" />
            <IconButton icon={<StarIcon />} variant="ghost" />
            <IconButton icon={<StarIcon />} variant="inset-light" />
            <IconButton icon={<StarIcon />} variant="inset-dark" />
            <IconButton icon={<StarIcon />} variant="accent" badgeCount={5} />
            <IconButton icon={<StarIcon />} variant="primary" elevated />
          </Inline>
        </Stack>
      </section>
      <hr />
      <Stack space="lg">
          <Heading level={300}>Sizes</Heading>
          <Inline>
            <IconButton icon={<StarIcon />} variant="secondary" size="sm" />
            <IconButton icon={<StarIcon />} variant="secondary" size="md" />
            <IconButton icon={<StarIcon />} variant="secondary" size="lg" />
            </Inline>
          <Inline>
            <Dropdown label="small" variant="secondary" size="sm" items={menuItems} />
            <Dropdown label="medium" variant="secondary" size="md" items={menuItems} />
            <Dropdown label="large" variant="secondary" size="lg" items={menuItems} />
          </Inline>
          <Inline>
            <Button variant="secondary" size="xs">extra small</Button>
            <Button variant="secondary" size="sm">small</Button>
            <Button variant="secondary" size="md">medium</Button>
            <Button variant="secondary" size="lg">large</Button>
            <Button variant="secondary" size="xl">extra large</Button>
          </Inline>
      </Stack>
      <Stack space="lg">
          <Heading level={300}>Sizes</Heading>
          <Inline>
            <IconButton icon={<StarIcon />} variant="primary" size="sm" />
            <Dropdown label="small" variant="primary" size="sm" items={menuItems} />
            <Button variant="primary" size="sm">small</Button>
            </Inline>
          <Inline>
            <IconButton icon={<StarIcon />} variant="primary" size="md" />
            <Dropdown label="medium" variant="primary" size="md" items={menuItems} />
            <Button variant="primary" size="md">medium</Button>
            
          </Inline>
          <Inline>
            <IconButton icon={<StarIcon />} variant="primary" size="lg" />
            <Dropdown label="large" variant="primary" size="lg" items={menuItems} />
            <Button variant="primary" size="lg">large</Button>
          </Inline>
      </Stack>

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
