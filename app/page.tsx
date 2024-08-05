import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="mb-4  font-semibold text-5xl">This is an h1 test</h1>
      <h2 className="mb-3  font-medium text-4xl">This is an h2 test</h2>
      <h3 className="mb-2  font-light text-3xl">This is an h3 test</h3>
      <h4 className="mb-1 font-extralight text-2xl">This is an h4 test</h4>
      {/* <h5>This is an h5 test</h5>
      <h6>This is an h6 test</h6> */}
      <p className="text-base font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        faucibus eleifend dapibus. Aliquam erat volutpat. Vivamus in vulputate
        eros, nec porta eros. Etiam placerat nisi eget nunc finibus, eget
        sagittis lectus suscipit. Aliquam erat volutpat. Nam ultricies velit id
        sapien bibendum, vel ultricies metus auctor. Ut facilisis ligula urna,
        sed viverra justo consequat vel. Vivamus condimentum lacus eget lorem
        tempus, ut cursus dui tincidunt. Nunc eget condimentum lorem,
        sollicitudin lacinia mauris. Mauris sit amet dapibus metus, quis
        pellentesque tellus. Aliquam ut rutrum arcu. Cras eleifend, libero et
        consectetur condimentum, neque urna eleifend nunc, vitae elementum sem
        tellus ut ex. Praesent cursus id enim ut consectetur. Ut sit amet
        tincidunt erat. Nunc lectus tortor, rutrum nec sem nec, euismod
        consequat ipsum. Ut at diam a velit vulputate cursus.
      </p>
    </main>
  );
}
