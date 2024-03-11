import { CopyrightIcon } from "../svg-icons";
import IconBox from "./IconBox";
import Logo from "./Logo/Logo";

function Footer() {
	return (
		<footer className="bg-medinfo-primary px-[2.4rem] py-[4rem] text-white">
			<Logo type="footer" />

			<div className="mt-[2rem] flex items-center gap-[0.4rem] text-[1.4rem] text-white">
				<CopyrightIcon />
				<p>2023 MedInfo Nigeria. All rights reserved.</p>
			</div>

			<div className="mt-[4.4rem] text-[1.8rem]">
				<h3 className="text-[2rem] text-medinfo-secondary-darker">Quick links</h3>

				<ul className="mt-[2.4rem] space-y-[1.6rem]">
					<li>About us</li>
					<li>FAQs</li>
					<li>Library</li>
				</ul>
			</div>

			<div className="mt-[4.4rem] text-[1.8rem]">
				<h3 className="text-[2rem] text-medinfo-secondary-darker">Contact us</h3>

				<ul className="mt-[2.4rem] space-y-[1.6rem]">
					<li className="flex items-center gap-[1.2rem]">
						<IconBox icon="bi:telephone" className="size-[2.2rem]" />
						<p>+234 8123 456 789</p>
					</li>

					<li className="flex items-center gap-[1.2rem]">
						<IconBox icon="mynaui:envelope" className="size-[2.2rem]" />
						<p>tezonteam@gmail.com</p>
					</li>

					<li className="flex gap-[1.6rem]">
						<IconBox icon="mynaui:brand-facebook" className="size-[2.2rem]" />
						<IconBox icon="akar-icons:instagram-fill" className="size-[2.2rem]" />
						<IconBox icon="lucide:linkedin" className="size-[2.2rem]" />
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
