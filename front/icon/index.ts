/** 通过 template+innerHTML 的方式渲染 */
function replace(t: any) {
	const s = t[0].replace(/(fill\=")([^"]+")/g, (matched, former, later) => {
		return ''
	})
	const prefix = s.slice(0,4);
	const suffix =  s.slice(3);
	return prefix + ` fill="currentColor" width="1em" height="1em"` + suffix;
}

export const iClose = replace`<svg fill="currentColor" fill="#000000" t="1732442875629" class="icon" viewBox="0 0 1076 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="830" width="200" height="200"><path d="M1074.977 463.141l1.763 1.396q-0.869-0.735-1.763-1.396zM0 465.15l3.184-2.523c-3.822 2.659-6.942 6.058-9.205 10.009z" p-id="831"></path><path d="M111.983 994.893c-0.282 1.886-0.576 3.759-0.833 5.657 0.53-2.012 0.843-4.326 0.86-6.71zM83.758 1021.833zM55.569 991.477q0.306-2.118 0.637-4.237c-0.43 1.794-0.687 3.859-0.71 5.981z" p-id="832"></path><path d="M1021.931 984.901c0.355 2.216 0.673 4.445 0.992 6.674-0.088-2.676-0.521-5.217-1.258-7.625zM965.272 999.46c-0.245-1.751-0.502-3.49-0.771-5.229 0.137 2.393 0.541 4.636 1.182 6.776z" p-id="833"></path><path d="M538.634 0c-282.327 0-512 229.673-512 512s229.673 512 512 512 512-229.673 512-512-229.673-512-512-512zM538.634 950.516c-241.808 0-438.528-196.757-438.528-438.528s196.721-438.516 438.528-438.516 438.528 196.721 438.528 438.528-196.757 438.528-438.528 438.528z" p-id="834"></path><path d="M748.554 305.446c-6.631-6.706-15.832-10.858-26.003-10.858-10.025 0-19.107 4.034-25.712 10.568l-158.353 156.638-155.944-156.458c-6.621-6.639-15.777-10.747-25.893-10.747-20.195 0-36.566 16.371-36.566 36.566 0 10.079 4.078 19.206 10.674 25.82l155.723 156.249-156.997 155.258c-6.704 6.632-10.856 15.833-10.856 26.003 0 20.197 16.373 36.571 36.571 36.571 10.027 0 19.112-4.036 25.718-10.571l157.214-155.512 158.466 159.030c6.568 6.345 15.524 10.255 25.393 10.255 20.194 0 36.564-16.37 36.564-36.564 0-9.814-3.867-18.726-10.16-25.293l-158.27-158.833 158.136-156.409c6.706-6.631 10.858-15.832 10.858-26.003 0-10.025-4.034-19.107-10.568-25.712z" p-id="835"></path></svg>`;
export const iArrow = replace`<svg t="1732445305447" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="980" width="200" height="200"><path d="M318.73024 836.32128c3.9936 3.9936 9.23648 6.00064 14.47936 6.00064s10.48576-2.00704 14.47936-6.00064l307.2-307.2c8.00768-8.00768 8.00768-20.95104 0-28.95872l-307.2-307.2c-8.00768-8.00768-20.95104-8.00768-28.95872 0s-8.00768 20.95104 0 28.95872l292.72064 292.72064L318.73024 807.36256C310.72256 815.37024 310.72256 828.33408 318.73024 836.32128z" fill="#231F20" p-id="981"></path></svg>`;
export const iPlusSquare = replace`<svg t="1733064123141" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2292" width="200" height="200"><path d="M888.32 62.976c19.968 0.512 36.864 7.68 50.688 21.504s20.992 30.72 21.504 50.688v754.176c-0.512 19.968-7.68 36.864-21.504 50.688s-30.72 20.992-50.688 21.504h-752.64c-20.48-0.512-37.888-7.68-51.712-21.504-13.824-13.824-20.48-30.72-20.48-50.688V135.168c0-19.968 6.656-36.864 20.48-50.688s30.72-20.992 51.712-21.504h752.64z m-752.64 72.192v754.176h753.152V135.168H135.68z m621.568 351.744c7.168 6.656 10.752 14.848 10.752 25.088 0 10.752-3.584 19.456-10.752 26.112-7.168 6.656-15.36 10.24-25.6 10.24h-182.784v182.784c-0.512 10.24-4.096 18.432-10.752 25.6s-14.848 10.752-25.088 10.752c-10.752 0-19.456-3.584-26.112-10.752-6.656-7.168-10.24-15.36-10.24-25.6V547.84H291.328c-10.24 0-18.432-3.072-25.6-10.24-7.168-6.656-10.752-15.36-10.752-26.112 0-10.24 3.584-18.432 10.752-25.088 7.168-6.656 15.36-10.24 25.6-10.752H476.16V292.864c0-10.24 3.584-18.432 10.24-25.6s15.36-10.752 26.112-10.752c10.24 0 18.432 3.584 25.088 10.752 6.656 7.168 10.24 15.36 10.752 25.6V476.16h182.784c10.24 0.512 18.944 4.096 26.112 10.752z" p-id="2293"></path></svg>`;
export const iDecSquare = replace`<svg t="1733063337966" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15862" width="200" height="200"><path d="M739.754667 544c3.84 0 6.912-4.778667 6.912-10.666667v-42.666666c0-5.888-3.093333-10.666667-6.912-10.666667H284.224c-3.797333 0-6.890667 4.778667-6.890667 10.666667v42.666666c0 5.888 3.093333 10.666667 6.890667 10.666667h455.530667z" fill="#313233" p-id="15863"></path><path d="M85.333333 170.666667a85.333333 85.333333 0 0 1 85.333334-85.333334h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333334v682.666666a85.333333 85.333333 0 0 1-85.333334 85.333334H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333334V170.666667z m85.333334-21.333334a21.333333 21.333333 0 0 0-21.333334 21.333334v682.666666a21.333333 21.333333 0 0 0 21.333334 21.333334h682.666666a21.333333 21.333333 0 0 0 21.333334-21.333334V170.666667a21.333333 21.333333 0 0 0-21.333334-21.333334H170.666667z" fill="#313233" p-id="15864"></path></svg>`;
export const iPrevious= replace`<svg t="1733072269539" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15454" width="200" height="200"><path d="M660.698159 936.87264c-30.501688 0-59.178821-11.873422-80.747046-33.440623L250.760672 574.229297c-22.10546-22.092158-34.20094-52.67264-33.308617-84.026742-0.917906-31.394011 11.189853-61.986773 33.308617-84.104513L579.965439 76.893274c21.567201-21.567201 50.232055-33.4396 80.733743-33.4396 30.513968 0 59.178821 11.872399 80.733743 33.4396 44.525076 44.525076 44.525076 116.967992 0 161.493068L489.654574 490.163669l251.776304 251.776304c44.525076 44.526099 44.525076 116.969015 0 161.493068C719.8647 925.000242 691.198823 936.87264 660.698159 936.87264zM660.698159 97.187483c-16.148795 0-31.327496 6.284123-42.742477 17.697057L295.115879 444.090331c-11.964496 11.990079-11.189853 27.994588-11.189853 45.075615 0 0.682545 0 1.351787 0 2.034333 0 17.067724-0.774643 33.05893 11.189853 45.036729l326.017168 329.203744c11.411911 11.412934 25.016767 17.698081 41.153282 17.698081 16.163121 0 30.540573-6.285147 41.954531-17.698081 23.573905-23.573905 23.168676-61.933561-0.406253-85.509513L432.863127 509.159302c-10.495028-10.495028-10.587126-27.498284-0.091074-37.992289l270.720771-270.77296c23.560602-23.574928 23.548322-61.934584-0.014326-85.509513C692.065564 103.471606 676.847977 97.187483 660.698159 97.187483z" fill="#272636" p-id="15455"></path></svg>`
export const iTick = replace`<svg t="1737106866511" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3538" width="200" height="200"><path d="M995.06087 31.165217c-142.469565 74.217739-277.504 215.930435-405.147827 425.182609-65.313391 103.869217-115.756522 200.347826-151.373913 289.391304L307.2 480.834783 31.165217 652.243478c59.347478 20.791652 126.886957 63.087304 202.573913 126.886957 77.156174 65.313391 151.373913 141.712696 222.608696 229.286956 56.409043-106.852174 142.469565-226.304 258.226087-358.4 129.113043-148.390957 227.817739-230.043826 296.069565-244.869565-23.730087-57.878261-34.860522-120.965565-33.391304-189.217391 8.904348-80.13913 14.825739-141.712696 17.808696-184.765218z" fill="#000000" p-id="3539"></path></svg>`;
export const iDbExp = replace`<svg t="1737290291908" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="49830" width="200" height="200"><path d="M565.824 512l384.704-384.64a48.704 48.704 0 0 0 1.024-68.8 48.704 48.704 0 0 0-68.8 0.96L465.344 476.736a49.92 49.92 0 0 0-11.136 17.408c-0.896 2.112-0.896 4.48-1.472 6.72-0.768 3.648-1.984 7.296-1.984 11.136s1.152 7.424 1.984 11.136c0.576 2.176 0.576 4.608 1.472 6.72a49.28 49.28 0 0 0 11.136 17.408l417.344 417.28a48.64 48.64 0 0 0 68.8 1.024 48.64 48.64 0 0 0-1.024-68.736L565.824 512z" fill="#030000" p-id="49831"></path><path d="M173.76 512l384.704-384.64a48.704 48.704 0 0 0 1.024-68.8 48.64 48.64 0 0 0-68.864 0.896l-417.28 417.216a49.92 49.92 0 0 0-11.136 17.408c-0.896 2.112-0.896 4.48-1.408 6.784-0.832 3.648-2.048 7.296-2.048 11.136s1.216 7.424 2.048 11.072c0.576 2.24 0.576 4.608 1.408 6.784a49.28 49.28 0 0 0 11.136 17.408l417.28 417.216a48.64 48.64 0 0 0 68.864 1.088 48.704 48.704 0 0 0-0.96-68.8L173.76 512z" fill="#030000" p-id="49832"></path></svg>`;
export const iCloseSolid = replace`<svg t="1737302960807" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3382" width="200" height="200"><path d="M512 949.333333C270.933333 949.333333 74.666667 753.066667 74.666667 512S270.933333 74.666667 512 74.666667 949.333333 270.933333 949.333333 512 753.066667 949.333333 512 949.333333z m-151.466667-292.266666c10.666667 10.666667 29.866667 12.8 42.666667 2.133333l2.133333-2.133333 104.533334-102.4 102.4 102.4 2.133333 2.133333c12.8 10.666667 32 8.533333 42.666667-2.133333 12.8-12.8 12.8-32 0-44.8L554.666667 509.866667l102.4-102.4 2.133333-2.133334c10.666667-12.8 8.533333-32-2.133333-42.666666s-29.866667-12.8-42.666667-2.133334l-2.133333 2.133334-102.4 102.4-102.4-102.4-2.133334-2.133334c-12.8-10.666667-32-8.533333-42.666666 2.133334-12.8 12.8-12.8 32 0 44.8l102.4 102.4-102.4 102.4-2.133334 2.133333c-10.666667 12.8-10.666667 32 0 42.666667z" fill="#666666" p-id="3383"></path></svg>`;
export const iWarn = replace`<svg t="1737542529291" class="icon" viewBox="0 0 1034 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5574" width="200" height="200"><path d="M1011.982 842.518 606.673 140.565c-49.575-85.822-130.595-85.822-180.157 0L21.205 842.518c-49.562 85.91-9.015 155.99 90.04 155.99l810.693 0C1020.997 998.507 1061.502 928.423 1011.982 842.518zM460.924 339.737c14.565-15.747 33.082-23.622 55.665-23.622 22.595 0 41.095 7.792 55.675 23.307 14.485 15.55 21.725 34.997 21.725 58.382 0 20.12-30.235 168.07-40.32 275.704l-72.825 0c-8.845-107.635-41.652-255.584-41.652-275.704C439.194 374.774 446.446 355.407 460.924 339.737zM571.244 851.538c-15.32 14.92-33.55 22.355-54.65 22.355-21.095 0-39.33-7.435-54.647-22.355-15.275-14.885-22.867-32.915-22.867-54.09 0-21.065 7.592-39.29 22.867-54.565 15.317-15.28 33.552-22.92 54.647-22.92 21.1 0 39.33 7.64 54.65 22.92 15.265 15.275 22.875 33.5 22.875 54.565C594.119 818.623 586.509 836.653 571.244 851.538z" fill="#272636" p-id="5575"></path></svg>`;
export const iTool = replace`<svg t="1738407136998" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4508" width="200" height="200"><path d="M902.4 57.6l89.6 89.6c6.4 6.4 6.4 19.2 0 32l-134.4 172.8c-6.4 6.4-19.2 12.8-32 6.4l-32-32-179.2 160 275.2 275.2c51.2 51.2 51.2 134.4 0 185.6-51.2 51.2-134.4 51.2-185.6 0l-166.4-166.4L358.4 960c-19.2 19.2-44.8 25.6-70.4 25.6-25.6 0-51.2-6.4-70.4-25.6l-128-128c-12.8-25.6-25.6-51.2-25.6-76.8 0-25.6 6.4-51.2 25.6-64L275.2 512 256 492.8c-32 6.4-64 6.4-96-6.4-38.4-6.4-70.4-25.6-96-51.2-12.8-12.8-19.2-25.6-25.6-38.4 0-6.4-6.4-6.4-6.4-12.8 0-12.8 6.4-19.2 19.2-19.2H192l25.6-44.8 25.6-44.8-25.6-44.8-25.6-44.8H51.2c-6.4 0-6.4 0-12.8-6.4s-12.8-19.2-6.4-25.6c6.4-6.4 6.4-12.8 12.8-19.2l19.2-19.2C153.6 25.6 294.4 25.6 377.6 115.2c25.6 25.6 44.8 57.6 57.6 96 6.4 32 12.8 64 6.4 96L512 384l51.2 51.2 166.4-172.8-32-32c-6.4-6.4-6.4-19.2 0-32L870.4 57.6c6.4-6.4 19.2-6.4 32 0z m-179.2 601.6c-6.4 6.4-6.4 19.2-19.2 25.6l-25.6 25.6c-12.8 12.8-32 19.2-51.2 19.2-12.8 0-25.6-6.4-38.4-12.8l-25.6 25.6 166.4 166.4c32 32 89.6 32 121.6 0s32-89.6 0-121.6l-128-128zM300.8 480l25.6-25.6c-6.4-12.8-12.8-25.6-12.8-38.4 0-19.2 6.4-38.4 19.2-51.2l25.6-25.6c12.8-12.8 25.6-19.2 38.4-19.2v-6.4c6.4-32 0-57.6-6.4-89.6-6.4-25.6-19.2-51.2-44.8-76.8-64-70.4-172.8-70.4-243.2-6.4h102.4c6.4 0 12.8 6.4 19.2 12.8l32 57.6 32 57.6c6.4 6.4 6.4 12.8 0 19.2l-32 51.2-32 57.6c-6.4 6.4-12.8 12.8-19.2 12.8H102.4c19.2 19.2 44.8 32 64 38.4 32 6.4 64 6.4 89.6 0 6.4 0 12.8 0 19.2 6.4l25.6 25.6z m435.2 313.6c-25.6 25.6-25.6 70.4 0 96 25.6 25.6 70.4 25.6 102.4 0 25.6-25.6 25.6-70.4 0-96-25.6-25.6-70.4-25.6-102.4 0z m32 32c12.8-12.8 25.6-12.8 38.4 0 12.8 12.8 12.8 25.6 0 38.4-12.8 12.8-25.6 12.8-38.4 0-6.4-12.8-6.4-32 0-38.4zM416 518.4c6.4-6.4 19.2-6.4 25.6 0 6.4 6.4 6.4 19.2 0 32l-230.4 230.4c-6.4 6.4-25.6 6.4-32 0-6.4-6.4-6.4-19.2 0-32l236.8-230.4z m76.8 83.2c6.4-6.4 19.2-6.4 32 0 6.4 6.4 6.4 19.2 0 32l-230.4 230.4c-6.4 6.4-19.2 6.4-32 0-6.4-12.8-6.4-25.6 6.4-32l224-230.4z m160 32L416 390.4l-25.6 25.6 12.8 12.8c12.8 12.8 12.8 38.4 0 51.2l-256 256c-6.4 6.4-6.4 12.8-6.4 19.2 0 6.4 0 12.8 6.4 12.8l128 128c6.4 6.4 12.8 6.4 19.2 6.4 6.4 0 12.8 0 19.2-6.4 83.2-89.6 172.8-172.8 256-262.4 6.4-6.4 32-6.4 44.8 6.4l12.8 12.8 25.6-19.2z m288-467.2l-57.6-57.6-134.4 108.8L832 300.8l108.8-134.4z" fill="" p-id="4509"></path></svg>`;
export const iLock = replace`<svg t="1738421069675" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3382" width="200" height="200"><path d="M785.066667 416h-61.866667v-121.6c0-108.8-91.733333-198.4-202.666667-198.4s-202.666667 89.6-202.666666 198.4v121.6h-78.933334c-55.466667 0-100.266667 44.8-100.266666 100.266667v311.466666c0 55.466667 44.8 100.266667 100.266666 100.266667h546.133334c55.466667 0 100.266667-44.8 100.266666-100.266667V516.266667c0-55.466667-44.8-100.266667-100.266666-100.266667z m-403.2-121.6c0-74.666667 61.866667-134.4 138.666666-134.4s138.666667 59.733333 138.666667 134.4v121.6h-277.333333v-121.6z m439.466666 533.333333c0 19.2-17.066667 36.266667-36.266666 36.266667H238.933333c-19.2 0-36.266667-17.066667-36.266666-36.266667V516.266667c0-19.2 17.066667-36.266667 36.266666-36.266667h546.133334c19.2 0 36.266667 17.066667 36.266666 36.266667v311.466666z" fill="#666666" p-id="3383"></path><path d="M512 544c-17.066667 0-32 14.933333-32 32v106.666667c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-106.666667c0-17.066667-14.933333-32-32-32z" fill="#666666" p-id="3384"></path></svg>`;
export const iHalfLock = replace`<svg t="1738421116148" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3534" width="200" height="200"><path d="M785.066667 416H381.866667v-121.6c0-74.666667 61.866667-134.4 138.666666-134.4 59.733333 0 113.066667 36.266667 132.266667 91.733333 6.4 17.066667 23.466667 25.6 40.533333 19.2 17.066667-6.4 25.6-23.466667 19.2-40.533333-27.733333-81.066667-104.533333-134.4-192-134.4-110.933333 0-202.666667 89.6-202.666666 198.4v121.6h-78.933334c-55.466667 0-100.266667 44.8-100.266666 100.266667v311.466666c0 55.466667 44.8 100.266667 100.266666 100.266667h546.133334c55.466667 0 100.266667-44.8 100.266666-100.266667V516.266667c0-55.466667-44.8-100.266667-100.266666-100.266667z m36.266666 411.733333c0 19.2-17.066667 36.266667-36.266666 36.266667H238.933333c-19.2 0-36.266667-17.066667-36.266666-36.266667V516.266667c0-19.2 17.066667-36.266667 36.266666-36.266667h546.133334c19.2 0 36.266667 17.066667 36.266666 36.266667v311.466666z" fill="#666666" p-id="3535"></path><path d="M512 544c-17.066667 0-32 14.933333-32 32v106.666667c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-106.666667c0-17.066667-14.933333-32-32-32z" fill="#666666" p-id="3536"></path></svg>`;
export const iUnLock = replace`<svg width="153px" height="165px" viewBox="0 0 153 165" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="unlock" transform="translate(7.083333, 0.750000)" fill="#666666" fill-rule="nonzero"><path d="M126.25,62.5 L47.5,62.5 L47.5,38.75 C47.5,24.1666666 59.5833334,12.5 74.5833332,12.5 C86.2499998,12.5 96.6666666,19.5833334 100.416667,30.4166666 C101.666667,33.75 105,35.4166666 108.333333,34.1666666 C111.666667,32.9166666 113.333333,29.5833332 112.083333,26.25 C106.666667,10.4166666 91.6666666,0 74.5833332,0 C52.9166666,0 35,17.5 35,38.75 L35,62.5 L19.5833332,62.5 C8.7499998,62.5 0,71.25 0,82.0833334 L0,142.916667 C0,153.75 8.75,162.5 19.5833332,162.5 L126.25,162.5 C137.083333,162.5 145.833333,153.75 145.833333,142.916667 L145.833333,82.0833334 C145.833333,71.25 137.083333,62.5 126.25,62.5 Z M133.333333,142.916667 C133.333333,146.666667 130,150 126.25,150 L19.5833332,150 C15.8333332,150 12.5,146.666667 12.5,142.916667 L12.5,82.0833334 C12.5,78.3333334 15.8333334,75 19.5833332,75 L126.25,75 C130,75 133.333333,78.3333334 133.333333,82.0833334 L133.333333,142.916667 L133.333333,142.916667 Z" id="形状"></path><path d="M72.9166666,87.5 C69.5833332,87.5 66.6666666,90.4166666 66.6666666,93.75 L66.6666666,114.583333 C66.6666666,117.916667 69.5833332,120.833333 72.9166666,120.833333 C76.25,120.833333 79.1666666,117.916667 79.1666666,114.583333 L79.1666666,93.75 C79.1666666,90.4166666 76.25,87.5 72.9166666,87.5 Z" id="路径"></path></g><rect id="矩形" stroke="#666666" fill="#666666" transform="translate(75.840959, 91.409038) rotate(-42.000000) translate(-75.840959, -91.409038) " x="-21.1590411" y="84.9090379" width="194" height="13" rx="5"></rect></g></svg>`;
export const iRubber = replace`<svg t="1738422430304" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13842" width="200" height="200"><path d="M594.1 909.3c-5.6 0-11.3-1.5-16.3-4.3l-0.3-0.2-0.3-0.1c-3.6-1.2-6.9-2.3-10.2-4.6L172.3 654.7c-8.5-5.4-14.2-16.7-14.2-28v-0.4c-1-12.7 6.9-25.2 19.9-31.2 64.6-24.4 122.5-58.4 172.1-101 49.2-42.2 88-91 115.5-145 5.6-10.5 14.7-15.8 27-15.8 7.6 0 13.9 2.2 15 2.5l126.8 64.5 156.3-283.8c4.8-7.2 11.6-12.5 18.8-14.6l0.2-0.1 0.2-0.1c2.8-1.2 5.8-1.9 8.7-1.9 4.4 0 9 1.4 13.8 4.2l0.2 0.1c7.3 3.7 12.6 10 14.9 17.8 2.4 8.1 1.4 16.8-2.9 24.4l-155.4 283L777 474c3.8 2 8.2 6 12.1 11.2 3.9 6.6 5.5 12 5.5 17.9-0.6 69.9-16.7 140.2-47.7 208.8-30.9 68.3-75.2 131.7-131.7 188.5-5.5 5.8-13 8.9-21.1 8.9zM540 692c8.3 0 16.1 3.3 22 9.2 12.1 12.3 12.1 32.4 0 44.7l-46.8 47.6 72.4 45.9 2.2-2.4c49.5-52.9 86.8-111.7 110.9-174.9l1.2-3.2-270.1-156.7-2.1 2.2c-50.5 51.4-108 93.1-170.8 123.8l-6.5 3.2 62.8 39.2 73.9-53.2c4.9-3.7 10.8-5.7 17.2-5.7 10.2 0 19.7 5.1 25.5 13.6l0.1 0.1c4.7 6.3 6.5 14.3 5.2 22.5-1.3 8.4-6.1 16.1-13 20.9l-51.9 37.5L459 760l59.1-58.8c5.8-5.9 13.6-9.2 21.9-9.2z m-36.7-282.6c-8.5 13.5-17.2 27.5-27.1 41.3l-2.6 3.6 247.1 143.3 1.2-5.3c5.6-25.6 8.9-48 10-68.6l0.1-2.6-226.8-114.8-1.9 3.1z" p-id="13843"></path></svg>`;
export const iCancel = replace`<svg t="1738477811600" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3982" width="200" height="200"><path d="M531.19158 198.31299c198.31299 19.19158 396.62598 147.135444 396.62598 403.023174 0 179.12141-166.327024 396.62598-371.037207 422.214753-38.383159 6.397193-51.177546-57.574739-12.794387-63.971932 115.149478-19.19158 198.31299-115.149478 198.31299-223.901763 0-134.341058-51.177546-191.915797-147.135444-204.710184-19.19158-6.397193-38.383159-6.397193-70.369126-6.397193v134.341058c0 70.369126-83.163512 102.355092-127.943864 51.177546L115.37402 422.214753C83.388053 390.228787 83.388053 345.448434 115.37402 313.462468L396.850522 25.588773c44.780353-51.177546 127.943865-12.794386 127.943864 51.177546v121.546671z m332.654048 403.023174c0-127.943865-57.574739-217.50457-153.532638-275.079309-70.369126-38.383159-153.532638-63.971932-211.107376-63.971933-19.19158 0-31.985966-12.794386-31.985967-31.985966V76.766319c0-12.794386-12.794386-19.19158-19.191579-6.397193L166.551566 358.242821c-6.397193 6.397193-6.397193 12.794386 0 19.19158L448.028068 665.308096c6.397193 6.397193 19.19158 0 19.191579-6.397193V492.583879c0-19.19158 12.794386-31.985966 31.985967-31.985966H512c44.780353 0 70.369126 0 102.355092 6.397193 127.943865 19.19158 198.31299 102.355092 198.31299 268.682116v38.383159c31.985966-57.574739 51.177546-115.149478 51.177546-172.724217z" fill="#777777" p-id="3983"></path></svg>`;
export const iLoading = replace`<svg t="1739260881764" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4115" width="200" height="200"><path d="M1023.849566 529.032144C1022.533495 457.744999 1007.544916 386.64064 979.907438 321.641387 952.343075 256.605575 912.349158 197.674868 863.252422 148.980264 814.192243 100.249102 755.992686 61.717486 693.004095 36.310016 630.052062 10.792874 562.347552-1.380777 495.483865 0.081523 428.620178 1.470709 362.012394 16.495846 301.144139 44.206439 240.202769 71.807359 185.000928 111.874391 139.377154 161.044242 93.753381 210.177537 57.707676 268.450209 33.945294 331.475357 10.073239 394.463948-1.296147 462.1319 0.166154 529.032144 1.482224 595.968946 15.593423 662.503615 41.549256 723.371871 67.468531 784.240126 105.013094 839.405409 151.075558 884.956067 197.101464 930.579841 251.645269 966.552431 310.612534 990.241698 369.543241 1014.040637 432.860849 1025.336908 495.483865 1023.874608 558.143438 1022.485422 620.291206 1008.337666 677.174693 982.381833 734.094737 956.462558 785.677384 918.954552 828.230327 872.892089 870.819826 826.902741 904.416179 772.395492 926.533473 713.5379 939.986637 677.85777 949.089457 640.605667 953.915048 602.841758 955.194561 602.951431 956.510631 602.987988 957.790144 602.987988 994.27454 602.987988 1023.849566 572.425909 1023.849566 534.735116 1023.849566 532.834125 1023.739893 530.933135 1023.593663 529.032144L1023.849566 529.032144 1023.849566 529.032144ZM918.892953 710.284282C894.691881 767.021538 859.596671 818.421398 816.568481 860.82811 773.540291 903.307938 722.652236 936.75806 667.706298 958.729124 612.760359 980.773303 553.902767 991.192193 495.483865 989.729893 437.064963 988.377265 379.304096 975.106889 326.441936 950.832702 273.543218 926.668187 225.616322 891.682649 186.097653 848.764132 146.542426 805.91873 115.35887 755.176905 94.959779 700.486869 74.451015 645.796833 64.799833 587.195144 66.189018 529.032144 67.541646 470.869145 79.934642 413.437296 102.563741 360.867595 125.119725 308.297895 157.765582 260.663459 197.759499 221.364135 237.716858 182.064811 284.985719 151.137157 335.910331 130.884296 386.834944 110.55832 441.305634 101.01681 495.483865 102.47911 549.662096 103.868296 603.036061 116.261292 651.876895 138.780718 700.754287 161.22703 745.025432 193.690099 781.509828 233.428113 818.067339 273.166127 846.764984 320.142529 865.518987 370.665008 884.346105 421.224045 893.156465 475.256046 891.76728 529.032144L891.986625 529.032144C891.840395 530.933135 891.76728 532.797568 891.76728 534.735116 891.76728 569.939999 917.540325 598.893547 950.66143 602.585856 944.227308 639.728286 933.589072 675.956779 918.892953 710.284282Z" p-id="4116"></path></svg>`;
export const iDelete = replace`<svg t="1739699826476" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2306" width="200" height="200"><path d="M353.67 769.987c-7.62 0-13.787 6.083-13.787 13.577v27.159c0 7.497 6.167 13.577 13.787 13.577 7.62 0 13.787-6.08 13.787-13.577v-27.159c0-7.494-6.167-13.577-13.787-13.577zM353.67 471.27c-7.62 0-13.787 6.083-13.787 13.582v230.825c0 7.497 6.167 13.574 13.787 13.574 7.62 0 13.787-6.077 13.787-13.574V484.852c0-7.5-6.167-13.582-13.787-13.582zM519.109 471.27c-7.62 0-13.787 6.083-13.787 13.582v325.871c0 7.497 6.167 13.577 13.787 13.577 7.62 0 13.787-6.08 13.787-13.577V484.852c0-7.5-6.167-13.582-13.787-13.582zM684.548 471.27c-7.62 0-13.787 6.083-13.787 13.582v325.871c0 7.497 6.167 13.577 13.787 13.577 7.62 0 13.787-6.08 13.787-13.577V484.852c0-7.5-6.167-13.582-13.787-13.582zM918.056 276.865a75.258 75.258 0 0 1-0.108 1.764c0.066 1.412 0.108 2.825 0.108 4.24v-6.004z" p-id="2307"></path><path d="M806.101 175.941l-67.431-0.031c-5.88-75.746-38.858-111.986-141.257-111.986H431.974c-94.972 0-127.166 28.912-132.583 111.787l-79.708-0.036c-62.821 0-113.739 42.722-113.739 95.407v5.783c0 47.775 41.864 87.351 96.505 94.318v458.211c0 112.527 34.09 130.682 133.449 130.682h357.587c107.116 0 142.285-26.868 142.285-130.682V371.953c60.202-1.169 80.179-65.405 82.179-93.324-2.478-52.614-50.669-102.688-111.848-102.688z m-374.127-57.705h165.439c62.157 0 81.858 5.994 86.148 57.649l-329.492-0.149c1.98-49.8 13.479-57.5 77.905-57.5z m261.511 787.536H335.898c-80.133 0-78.302-5.002-78.302-76.378v-457.14l523.026-0.248v457.388c0 74.236-9.681 76.378-87.137 76.378z m112.616-582.797l-586.418 3.036c-32.368 0-58.592-22.009-58.592-49.146v-5.783c0-27.145 26.224-49.151 58.592-49.151l586.418 3.019c32.368 0 56.01 21.121 56.01 49.014 0 27.884-23.642 49.011-56.01 49.011z" p-id="2308"></path></svg>`;

