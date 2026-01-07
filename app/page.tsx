export default function Home() {
  return (
    <section className="space-y-10">
      {/* Intro */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold leading-tight">
          안녕하세요 👋 <br />
          프론트엔드 개발자 <span className="text-blue-500">현준용</span>입니다.
        </h1>

        <p className="max-w-2xl text-gray-600">
          혼자 하는 것보다는 여러 사람과 협업하며 커뮤니케이션하는 것을 즐기고,  
          어려운 문제에 직면하더라도 해결하기 위해 끊임없이 도전하는 개발자를 지향합니다.
        </p>
      </div>

      {/* Profile */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">프로필</h2>

        <ul className="space-y-2 text-gray-700">
          <li>• 1998.01.21</li>
          <li>• 제주대학교 졸업 (2022.08)</li>
          <li>
            • 커넥트웨이브<br />
            <span className="ml-3 text-sm text-gray-500">
              (2022.02 ~ 2023. 10)
            </span>
          </li>
          <li>
            • 싸이클로이드<br />
            <span className="ml-3 text-sm text-gray-500">
              (2023.11 ~ 2024. 01)
            </span>
          </li>
          <li>
            • 가제트코리아 재직중<br />
            <span className="ml-3 text-sm text-gray-500">
              (2024.02 ~ )
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}