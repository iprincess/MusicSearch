using NUnit.Framework;

namespace MusicSearch.Tests
{
	public class Tests
	{
		[SetUp]
		public void Setup()
		{
		}

		[Test]
		public void Test1()
		{
			Assert.Pass();
		}

		[Test]
		public void Test2()
		{
			Assert.That(() => { throw new System.ArgumentException(); }, Throws.ArgumentException);
		}
	}
}