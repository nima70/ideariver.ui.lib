import { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "../../components/ui/scroll-area"; // Adjust the import path as needed

const meta: Meta<typeof ScrollArea> = {
  title: "Shadcn/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"], // Enables automatic documentation in Storybook
  parameters: {
    layout: "centered", // Center the component in the Storybook preview
  },
  argTypes: {
    className: {
      control: "text",
      description: "Optional additional class names for styling.",
    },
    children: {
      control: "text",
      description: "Content inside the ScrollArea component.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

// Default story rendering the ScrollArea component
export const Default: Story = {
  render: () => (
    <div className="h-64 w-64 border">
      <ScrollArea className="p-2">
        <p className="h-[150%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          illum voluptate hic quos consequuntur esse ratione obcaecati facilis
          sequi! Reprehenderit vitae harum quos aliquid numquam quasi magni
          commodi, natus reiciendis illum at hic impedit. Dicta nobis sequi
          nesciunt minus, perspiciatis ea porro. Id, tenetur sit! Iure facere
          mollitia itaque facilis earum unde harum! Rerum dicta fuga quidem quae
          tempore possimus adipisci ex debitis. Quam, ut voluptates eveniet
          autem, recusandae unde eum facere consequuntur, sit repellat illo nam
          cum laboriosam quibusdam quidem tempora dicta asperiores rerum esse
          ipsa hic. Doloremque aut officia porro, esse itaque repellendus. Sint
          cum sit nulla deleniti. This is a scrollable content area.lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Modi, a ducimus
          corrupti repellat maxime consequuntur iure aliquid architecto
          temporibus minus, voluptatem officia culpa tenetur quo blanditiis ex?
          Consequatur, molestias voluptatem.
        </p>
      </ScrollArea>
    </div>
  ),
};

// Custom size and content story
export const CustomContent: Story = {
  render: () => (
    <div className="h-96 w-96 border">
      <ScrollArea className="p-2">
        <div className="h-[200%] w-[200%]">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quidem rerum vero tempore totam quibusdam adipisci sed porro
            accusamus aut, itaque ipsam laudantium facilis earum quaerat quam
            nam rem recusandae velit quasi esse? Minima reiciendis cumque
            veritatis quo soluta? Cumque consequuntur obcaecati corrupti
            excepturi dolorem similique ex aperiam eveniet, aspernatur atque
            tempore laudantium aut a quia quaerat officia alias quam provident
            facilis, eos laboriosam vel, earum dolorum? Numquam aperiam sapiente
            eum autem vitae dolorem molestiae eligendi doloremque expedita,
            consequuntur laudantium inventore facere neque necessitatibus fugiat
            ab ut quod quos exercitationem placeat. Ea nobis quidem amet nemo
            veniam! Dolor consectetur tenetur commodi iste minima? Non, facere!
            Modi consequuntur dicta aut alias sit veniam? Dolorem adipisci
            eligendi omnis magni, fugiat impedit voluptas similique iure animi,
            amet atque sit odit qui sapiente id expedita voluptates, architecto
            ab pariatur necessitatibus eos. Voluptate corporis explicabo vel
            enim sequi repellendus adipisci numquam culpa distinctio eveniet
            quas voluptatem modi itaque esse molestias facilis deleniti ullam
            aperiam, odio fuga atque mollitia pariatur autem ea! Molestias,
            aliquid est eligendi a beatae debitis consectetur magni, vel
            doloremque aperiam error ipsum alias aut consequatur iste, nemo
            repudiandae? Velit debitis nulla quasi provident doloribus suscipit
            fugiat rerum, tenetur facilis minus deserunt laudantium? Soluta,
            reiciendis? Harum, atque. Asperiores, natus quos ad distinctio vero
            doloribus animi molestiae maiores quod, laudantium incidunt eveniet,
            hic in deserunt enim reprehenderit. Quasi, voluptas, accusantium
            velit maiores quos sit vitae nesciunt quisquam optio distinctio ad
            magnam quaerat eius nisi delectus tempora quo totam id? Animi aut
            illo culpa fugiat saepe corporis, officia iste tempora dolore ea,
            sit in obcaecati eum quasi quidem! Expedita, non aliquam? Ducimus
            reprehenderit, perferendis quo ea consectetur est soluta aperiam,
            rem odit beatae saepe. Nesciunt tempora facere voluptates magnam
            distinctio corporis voluptatum in ex praesentium natus ipsam amet
            veniam ut, qui harum delectus. Iusto dicta ducimus blanditiis esse?
            Doloremque veniam deserunt, esse unde reprehenderit necessitatibus
            doloribus cumque. Error, in ipsum animi nemo quas eum, sunt odio
            harum aut facere quia voluptates vitae at dolorum numquam eligendi
            illum similique commodi id ad illo. Vero voluptatem modi, ipsum
            voluptate, veritatis odit nulla libero quos quae delectus
            consequuntur tempora laboriosam, atque asperiores numquam porro
            aperiam doloremque accusantium dicta in unde excepturi voluptates?
            Nulla corrupti debitis, voluptate repudiandae, eligendi veniam amet
            delectus temporibus nobis enim possimus modi molestias, consequatur
            a nisi! Neque officia, accusantium maxime nostrum libero consectetur
            itaque adipisci repellat molestias quisquam est, illo non ut quasi
            iusto. Labore qui illo dolore in obcaecati et, nobis blanditiis
            soluta voluptatum esse, vitae maiores modi ipsa similique eius.
            Sapiente explicabo ipsam eaque dolor aspernatur. Recusandae, quod
            ea? Assumenda maxime sequi commodi, amet delectus magnam cupiditate
            quasi inventore, maiores aut sapiente qui modi minus excepturi magni
            nihil odio natus iure consequuntur ex atque doloremque molestias.
            Sint cupiditate quasi iure ea tempore minima, temporibus ullam
            laborum ut repudiandae deserunt reiciendis a. Corrupti delectus nemo
            iste, molestias harum quo error cum itaque accusamus architecto
            explicabo qui animi voluptatem tempora? Aperiam a reiciendis, earum
            fugiat doloribus dolor. Distinctio, accusamus eos quidem esse
            officiis, sunt rerum cupiditate error excepturi est ea, voluptatibus
            nesciunt. Corporis officiis, laudantium alias magni soluta vitae
            aliquam repellat inventore adipisci veritatis molestiae fuga ex
            provident exercitationem possimus dolores laboriosam quam sit
            quibusdam magnam unde totam repudiandae qui. Voluptate distinctio
            consequuntur labore repudiandae atque velit natus officiis. Iure
            saepe libero aut nam excepturi ad consequuntur nobis, ratione, totam
            cupiditate reiciendis et magni. Fuga quibusdam facere culpa
            recusandae quo minima maiores eos, ipsa possimus corporis dicta?
            Voluptas nisi praesentium dolor ad corrupti saepe, non sed veniam
            nemo, delectus perferendis sequi, rem labore consequuntur illum
            libero quae voluptates commodi! Minus dolore atque debitis
            architecto nisi? Rem animi aliquid similique quasi ut laborum?
            Reprehenderit quae consequatur recusandae sapiente cum? Officiis
            hic, deserunt dolores accusantium voluptate alias quam fugit
            eligendi facilis omnis tempora nesciunt sequi, quaerat eveniet
            deleniti atque. Aperiam veritatis qui esse aspernatur placeat harum
            ut a delectus et fugit sit, molestias, libero totam, distinctio ea
            asperiores iure vero ratione? Perspiciatis quae ea unde quo hic vero
            quam a vitae nisi laborum officiis ipsa animi dignissimos modi sed
            numquam, accusamus dolores dolorum. Qui enim culpa nesciunt. Neque
            inventore sequi magni doloremque aut necessitatibus fuga deserunt
            libero earum esse, itaque sed atque perferendis non quae cum beatae
            pariatur dolorum. Consequuntur nam maiores atque deserunt ullam aut
            quisquam minima, sit voluptate nisi! Maiores porro sint quidem quas
            eaque voluptatum at reiciendis consectetur exercitationem delectus
            cumque quasi commodi molestiae, enim voluptates hic possimus iure
            sapiente nam quo similique pariatur neque ipsum. Natus, officiis
            dicta! Animi amet vitae delectus accusamus, quibusdam voluptate quis
            eveniet voluptates accusantium non est perspiciatis, pariatur esse
            obcaecati, assumenda distinctio! Eum, tenetur harum, eveniet at a
            nisi eos exercitationem iure similique atque molestias dolor.
            Laboriosam sapiente repellat sequi perspiciatis optio dolorum
            facilis architecto ratione animi dicta sunt sit asperiores, aliquam
            ea aut id vel quas? Nulla eos voluptatibus, est illum minus deleniti
            incidunt quos maiores obcaecati voluptatum et amet ut optio sint
            neque, earum aut eveniet quisquam nam, ipsum fugiat aperiam. Ipsa
            amet possimus eos officia dignissimos voluptate ullam nulla,
            dolorum, unde autem pariatur eaque quo nihil expedita iure rerum
            accusamus quod architecto quos optio molestiae deserunt quasi
            corporis facilis! Cupiditate vel quam, non, impedit amet magnam nemo
            facere ad optio nostrum consectetur consequatur at cumque eligendi.
            Velit eveniet porro esse. Itaque vitae optio, impedit magni porro
            iure quidem doloremque cupiditate ex officiis fugit deserunt tempore
            eius. Autem assumenda, voluptatibus qui a asperiores recusandae
            ipsam, omnis optio in ad soluta, aut similique laborum. Omnis optio
            temporibus corporis eaque rerum tempora numquam a, praesentium
            impedit animi harum aperiam, saepe quod iste, dicta ipsa quam
            perferendis repellat. Sapiente placeat voluptates rem, libero iusto
            earum provident cum error modi ratione nisi impedit labore at dolore
            laborum eveniet, quisquam, obcaecati dignissimos sit cupiditate!
            Inventore, ad! Nobis non deleniti, iusto earum suscipit neque. Nemo
            consectetur sunt totam sequi tempora voluptatibus ipsum magni sint
            consequuntur voluptatem facilis soluta libero natus similique
            repellendus maxime, exercitationem deserunt beatae quia voluptas
            quasi officia cupiditate error. Voluptates, voluptate tempora
            accusantium unde libero exercitationem ad earum. This scrollable
            area contains more extensive content. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ex, facere maiores dolorem cum saepe
            libero amet omnis eveniet facilis nihil atque accusamus? Atque
            labore qui consectetur eius ut officiis rem!
          </p>
          <p>
            Scroll vertically and horizontally. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptates rem, autem ullam incidunt
            id quo perferendis adipisci assumenda possimus ipsam sit sequi,
            praesentium illo. Porro eius libero minus vitae quis?
          </p>
        </div>
      </ScrollArea>
    </div>
  ),
};
