# React-Shop

## 작업 분배

1. 메인페이지 슬라이더 및 리스트 (조영호님)
2. 각 상품 페이지 및 상세페이지 + 검색 기능 (김우진님)
3. 전체 테마 변경하는 부분과 스켈레톤 UI 등 (손용찬님)
4. 로그인 페이지 (강인웅님)
5. 상품 카트 관리하는 부분 (오혁상님)

## 사용예정 스택

- CRA vs Vite -> Vite
- React with Typescript
- 상태관리 라이브러리 : Recoil vs Redux -> Redux
- CSS : StyledComponenet + TailwindCSS

## 이용하는 협업툴

- Gather Town
- Slack
- Github

## Convention

### Prettier

### Git Convention

#### branch

- develop branch를 통한 버전관리

  > 완성 이후에 추가 버전 업데이트 등을 위해 develop_v1과 같은 branch에서 작업을 한 뒤 test 후 main branch에 병합

- feature

  > feauture/login_addFirebase 와 같이 이번에 하려고 하는 기능에 대해 브랜치 작성

- hotfix
  > feauture로 작업 한 내용 중 issue가 발생한 내용에 대한 수정 및 오류 정정 작업을 할 때 사용

#### commit

[좋은 commit message 작성을 위한 7가지 방법](https://meetup.toast.com/posts/106)글 참조

1. 제목과 본문을 한 줄 띄워 분리하기
2. 제목은 영문 기준 50자 이내로
3. 제목 첫글자를 대문자로
4. 제목 끝에 .금지
5. 제목은 명령조로
6. 본문은 영문 기준 72자마다 줄 바꾸기
7. 본문은 어떻게 보다 무엇을, 왜에 맞춰 작성하기
