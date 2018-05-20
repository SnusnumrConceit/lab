<?php
declare(strict_types=1);

use PHPUnit\Framework\TestCase;
use Luci\Src\Test;

class TestTest extends TestCase
{
    public function testFirstTest(): void
    {
        $this->assertInstanceOf(
            Test::class,
            new Test(),
            'Ну ебана рот'
        );
    }

    public function testAssertTrue(): void
    {
        $this->assertTrue(
            (new Test())->fuck(),
           'Пиздец, все сломалось'
        );
    }
}

